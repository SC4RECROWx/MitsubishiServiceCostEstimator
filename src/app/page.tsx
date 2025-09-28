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
  tyreServices as allTyreServices,
  acAndEngineServices as allAcAndEngineServices,
  getAcServicePrice,
} from "@/lib/data/services";
import { accessories as allAccessories } from "@/lib/data/accessories";
import { parts as allParts } from "@/lib/data/parts";
import { getAiRecommendation } from "@/app/actions";

import Header from "@/components/app/Header";
import VehicleSelectionForm from "@/components/app/VehicleSelectionForm";
import ServiceSelection from "@/components/app/ServiceSelection";
import EstimateSummary from "@/components/app/EstimateSummary";
import ServiceAdvisor from "@/components/app/ServiceAdvisor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PrintableEstimate from "@/components/app/PrintableEstimate";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [vehicles] = useState<Vehicle[]>(allVehicles);
  const [parts] = useState<Part[]>(allParts);
  const [periodicServices] = useState<PeriodicService[]>(allPeriodicServices);
  const [additionalServices] = useState<AdditionalService[]>(allAdditionalServices);
  const [tyreServices] = useState<AdditionalService[]>(allTyreServices);
  const [acAndEngineServices] = useState<AdditionalService[]>(allAcAndEngineServices);
  const [accessories] = useState<Accessory[]>(allAccessories);
  const { toast } = useToast();

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
    const additional = additionalServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    );
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
  }, [selectedVehicle, periodicServices, additionalServices, accessories, tyreServices, acAndEngineServices]);
  
  const allAvailableServices = useMemo(() => {
      if (!selectedVehicle) return [];
      return [
        ...filteredServices.periodic,
        ...filteredServices.additional,
        ...filteredServices.tyre,
        ...filteredServices.ac,
        ...filteredServices.accessories,
      ];
  }, [filteredServices]);


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

  const handleAiRecommendation = (recommendedName: string) => {
    if (!recommendedName) return;
  
    let serviceApplied = false;

    const applyService = (service: any) => {
        const periodic = filteredServices.periodic.find(s => s.name === service.name);
        if (periodic) {
          setSelectedPeriodicService(periodic);
          return true;
        }
        const additional = filteredServices.additional.find(s => s.name === service.name);
        if (additional) {
          setSelectedAdditionalServices(prev => [...new Set([...prev, additional])]);
          return true;
        }
        const tyre = filteredServices.tyre.find(s => s.name === service.name);
        if (tyre) {
          setSelectedTyreServices(prev => [...new Set([...prev, tyre])]);
          return true;
        }
        const ac = filteredServices.ac.find(s => s.name === service.name);
        if (ac) {
          setSelectedAcServices(prev => [...new Set([...prev, ac])]);
          return true;
        }
        const accessory = filteredServices.accessories.find(a => a.name === service.name);
        if (accessory) {
          setSelectedAccessories(prev => [...new Set([...prev, accessory])]);
          return true;
        }
        return false;
    }

    if (recommendedName.includes('&')) {
        const serviceNames = recommendedName.split('&').map(s => s.trim());
        serviceNames.forEach(name => {
            const service = allAvailableServices.find(s => s.name.startsWith(name));
            if (service) {
                if(applyService(service)) serviceApplied = true;
            }
        });
    } else {
        const service = allAvailableServices.find(s => s.name === recommendedName);
        if (service) {
            if(applyService(service)) serviceApplied = true;
        }
    }
  
    if (serviceApplied) {
      toast({
        title: "Rekomendasi Diterapkan",
        description: "Servis yang direkomendasikan telah ditambahkan ke pilihan Anda.",
      });
    } else {
       toast({
        title: "Rekomendasi Tidak Ditemukan",
        description: `Servis "${recommendedName}" tidak tersedia untuk model kendaraan ini.`,
        variant: "destructive",
      });
    }
  };

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
                <ServiceAdvisor 
                  selectedVehicle={selectedVehicle}
                  onRecommendation={handleAiRecommendation}
                  getRecommendationAction={getAiRecommendation}
                />

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
              periodicService={selectedPeriodicService}
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
            periodicService={selectedPeriodicService}
            additionalServices={allSelectedServices}
            accessories={selectedAccessories}
            partsData={parts}
        />
      </div>
    </div>
  );
}
