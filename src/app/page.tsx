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
import { vehicles as allVehicles } from "@/lib/data/vehicles";
import {
  periodicServices as allPeriodicServices,
  additionalServices as allAdditionalServices,
} from "@/lib/data/services";
import { accessories as allAccessories } from "@/lib/data/accessories";
import { parts as allParts } from "@/lib/data/parts";

import Header from "@/components/app/Header";
import VehicleSelectionForm from "@/components/app/VehicleSelectionForm";
import ServiceSelection from "@/components/app/ServiceSelection";
import EstimateSummary from "@/components/app/EstimateSummary";
import ServiceAdvisor from "@/components/app/ServiceAdvisor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PrintableEstimate from "@/components/app/PrintableEstimate";

export default function Home() {
  const [vehicles] = useState<Vehicle[]>(allVehicles);
  const [parts] = useState<Part[]>(allParts);
  const [periodicServices] = useState<PeriodicService[]>(allPeriodicServices);
  const [additionalServices] = useState<AdditionalService[]>(allAdditionalServices);
  const [accessories] = useState<Accessory[]>(allAccessories);

  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);
  const [selectedPeriodicService, setSelectedPeriodicService] = useState<PeriodicService | null>(null);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState<AdditionalService[]>([]);
  const [selectedAccessories, setSelectedAccessories] = useState<Accessory[]>([]);

  const filteredServices = useMemo(() => {
    if (!selectedVehicle) {
      return { periodic: [], additional: [], accessories: [] };
    }
    const periodic = periodicServices.filter(
      (s) => s.vehicleModelId === selectedVehicle.model
    );
    const additional = additionalServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    );
    const vehicleAccessories = accessories.filter((a) =>
      a.applicableModels.includes(selectedVehicle.model)
    );
    return { periodic, additional, accessories: vehicleAccessories };
  }, [selectedVehicle, periodicServices, additionalServices, accessories]);

  useEffect(() => {
    setSelectedPeriodicService(null);
    setSelectedAdditionalServices([]);
    setSelectedAccessories([]);
  }, [selectedVehicle]);

  const vehicleImage = useMemo(() => {
    if (!selectedVehicle) return null;
    return PlaceHolderImages.find((img) => img.id === selectedVehicle.model);
  }, [selectedVehicle]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 no-print">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Selamat Datang di Tanya Jawab Bengkel
          </h1>
          <p className="text-muted-foreground">
            Pilih kendaraan Anda untuk memulai estimasi biaya servis atau tanyakan pada AI Advisor kami.
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
                <ServiceAdvisor vehicle={selectedVehicle} />

                <Card>
                  <CardHeader>
                    <CardTitle>2. Pilih Jenis Servis & Aksesoris</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ServiceSelection
                      periodicServices={filteredServices.periodic}
                      additionalServices={filteredServices.additional}
                      accessories={filteredServices.accessories}
                      partsData={parts}
                      onPeriodicChange={setSelectedPeriodicService}
                      onAdditionalChange={setSelectedAdditionalServices}
                      onAccessoryChange={setSelectedAccessories}
                      selectedPeriodicService={selectedPeriodicService}
                      selectedAdditionalServices={selectedAdditionalServices}
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
              periodicService={selectedPeriodicService}
              additionalServices={selectedAdditionalServices}
              accessories={selectedAccessories}
              partsData={parts}
            />
          </div>
        </div>
      </main>
      
      {/* This div is no longer used for canvas rendering, but kept for potential future use or can be removed. */}
      <div id="printable-summary" className="print-container print-hidden">
        <PrintableEstimate
            vehicle={selectedVehicle}
            periodicService={selectedPeriodicService}
            additionalServices={selectedAdditionalServices}
            accessories={selectedAccessories}
            partsData={parts}
        />
      </div>
    </div>
  );
}
