"use client";

import { useState, useMemo, useEffect } from "react";
import type {
  Vehicle,
  PeriodicService,
  AdditionalService,
  Accessory,
  SelectedVehicle,
  Part,
} from "@/lib/types";

import Header from "@/components/app/Header";
import VehicleSelectionForm from "@/components/app/VehicleSelectionForm";
import ServiceSelection from "@/components/app/ServiceSelection";
import EstimateSummary from "@/components/app/EstimateSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PrintableEstimate from "@/components/app/PrintableEstimate";
import { vehicles } from "@/lib/data/vehicles";
import { parts } from "@/lib/data/parts";
import { 
  periodicServices, 
  additionalServices, 
  tyreServices, 
  acAndEngineServices,
  getAcServicePrice
} from "@/lib/data/services";
import { accessories } from "@/lib/data/accessories";

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);
  const [selectedPeriodicService, setSelectedPeriodicService] = useState<PeriodicService | null>(null);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState<AdditionalService[]>([]);
  const [selectedTyreServices, setSelectedTyreServices] = useState<AdditionalService[]>([]);
  const [selectedAcServices, setSelectedAcServices] = useState<AdditionalService[]>([]);
  const [selectedAccessories, setSelectedAccessories] = useState<Accessory[]>([]);

  const filteredServices = useMemo(() => {
    if (!selectedVehicle) {
      return { periodic: [], additional: [], accessories: [], tyre: [], ac: [] };
    }
    const periodic = periodicServices.filter(
      (s) => s.vehicleModelId === selectedVehicle.model
    );

    const additional = additionalServices.filter((s) => {
      if (!s.applicableModels.includes(selectedVehicle.model)) {
        return false;
      }
      
      if (selectedVehicle.model === 'xpander' || selectedVehicle.model === 'xpander-cross') {
        const transmissionType = selectedVehicle.transmisi.toUpperCase();
        const isASGTrim = transmissionType.includes("ULTIMATE CVT") || transmissionType.includes("SPORT CVT") || transmissionType.includes("PREMIUM CVT");

        // Filter battery services based on trim
        if (s.id === "add-battery-xp-asg") {
          return isASGTrim; // Show ASG battery only for specific trims
        }
        if (s.id === "add-battery-xp") {
          return !isASGTrim; // Hide standard battery for ASG trims
        }
        
        // Handle oil change services based on transmission type
        if (s.id.startsWith("add-transm-oil-xp-")) {
            if (s.id === "add-transm-oil-xp-mt") {
              return transmissionType.includes("MT");
            }
            if (s.id === "add-transm-oil-xp-at") {
              // Show AT service only if transmission is AT and NOT CVT
              return transmissionType.includes("AT") && !transmissionType.includes("CVT");
            }
            if (s.id === "add-transm-oil-xp-cvt") {
              return transmissionType.includes("CVT");
            }
            return false; // Don't show other transmission services if they don't match
        }
      }
      // Show other applicable services
      return true;
    });
    
    const tyre = tyreServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    );
    const ac = acAndEngineServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    ).map(service => ({
      ...service,
      job: { ...service.job, cost: getAcServicePrice(service.id, selectedVehicle.model) }
    }));
    const vehicleAccessories = accessories.filter((a) =>
      a.applicableModels.includes(selectedVehicle.model)
    );

    return { periodic, additional, accessories: vehicleAccessories, tyre, ac };
  }, [selectedVehicle]);
  
  useEffect(() => {
    setSelectedPeriodicService(null);
    setSelectedAdditionalServices([]);
    setSelectedTyreServices([]);
    setSelectedAcServices([]);
    setSelectedAccessories([]);
  }, [selectedVehicle]);

  const vehicleImage = useMemo(() => {
    if (!selectedVehicle) return null;
    return PlaceHolderImages.find((img) => img.id === selectedVehicle.model);
  }, [selectedVehicle]);

  const allSelectedServices = [
    ...selectedAdditionalServices,
    ...selectedTyreServices,
    ...selectedAcServices,
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 no-print">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Selamat Datang di Tanya Jawab Bengkel
          </h1>
          <p className="text-muted-foreground">
            Pilih kendaraan Anda untuk memulai estimasi biaya servis.
          </p>
          <p className="text-lg italic text-foreground/80">
            Jangan malu... Jangan ragu... Jangan bimbang...
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[1fr_350px]">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Pilih Kendaraan Anda</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <VehicleSelectionForm
                    vehicles={vehicles}
                    onVehicleSelect={setSelectedVehicle}
                />
                {vehicleImage && (
                  <div className="hidden items-center justify-center md:flex">
                    <Image
                      src={vehicleImage.imageUrl}
                      alt={vehicleImage.description}
                      width={200}
                      height={133}
                      className="rounded-lg object-cover"
                      data-ai-hint={vehicleImage.imageHint}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {selectedVehicle && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Pilih Jenis Servis & Aksesoris</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ServiceSelection
                      periodicServices={filteredServices.periodic}
                      additionalServices={filteredServices.additional}
                      tyreServices={filteredServices.tyre}
                      acAndEngineServices={filteredServices.ac}
                      accessories={filteredServices.accessories}
                      partsData={parts}
                      onPeriodicChange={setSelectedPeriodicService}
                      onAdditionalChange={setSelectedAdditionalServices}
                      onTyreChange={setSelectedTyreServices}
                      onAcChange={setSelectedAcServices}
                      onAccessoryChange={setSelectedAccessories}
                      selectedPeriodicService={selectedPeriodicService}
                      selectedAdditionalServices={selectedAdditionalServices}
                      selectedTyreServices={selectedTyreServices}
                      selectedAcServices={selectedAcServices}
                      selectedAccessories={selectedAccessories}
                    />
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          <div className="sticky top-6 grid gap-6">
            <EstimateSummary
              vehicle={selectedVehicle}
              periodicServices={selectedPeriodicService ? [selectedPeriodicService] : []}
              additionalServices={allSelectedServices}
              accessories={selectedAccessories}
              partsData={parts}
            />
          </div>
        </div>
      </main>
      
      <div id="printable-summary" className="print-container print-hidden">
        <PrintableEstimate
            vehicle={selectedVehicle}
            periodicServices={selectedPeriodicService ? [selectedPeriodicService] : []}
            additionalServices={allSelectedServices}
            accessories={selectedAccessories}
            partsData={parts}
        />
      </div>
    </div>
  );
}
