"use client";

import { useState, useMemo, useEffect } from "react";
import type {
  Vehicle,
  PeriodicService,
  AdditionalService,
  SelectedVehicle,
  Part,
} from "@/lib/types";

import Header from "@/components/app/Header";
import VehicleSelectionForm from "@/components/app/VehicleSelectionForm";
import ServiceSelection from "@/components/app/ServiceSelection";
import EstimateSummary from "@/components/app/EstimateSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrintableEstimate from "@/components/app/PrintableEstimate";
import { vehicles } from "@/lib/data/vehicles";
import { parts } from "@/lib/data/parts";
import { 
  periodicServices, 
  tyreServices, 
  acServices,
  engineMaintenanceServices,
  mspServices,
  getAcServicePrice,
  getTyreServicePrice,
  getEngineServicePrice,
  getMspServicePrice,
  getMspDescription
} from "@/lib/data/services";

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);
  const [selectedPeriodicService, setSelectedPeriodicService] = useState<PeriodicService | null>(null);
  const [selectedMspService, setSelectedMspService] = useState<AdditionalService | null>(null);
  const [selectedTyreServices, setSelectedTyreServices] = useState<AdditionalService[]>([]);
  const [selectedAcServices, setSelectedAcServices] = useState<AdditionalService[]>([]);
  const [selectedEngineServices, setSelectedEngineServices] = useState<AdditionalService[]>([]);

  const filteredServices = useMemo(() => {
    if (!selectedVehicle) {
      return { periodic: [], msp: [], tyre: [], ac: [], engine: [] };
    }
    
    const transmissionType = selectedVehicle.transmisi.toUpperCase();

    const periodic = periodicServices.filter((s) => {
        if (s.vehicleModelId !== selectedVehicle.model) return false;

        if (selectedVehicle.model === 'pajero-sport-anps') {
            const is4x4 = transmissionType.includes('4X4');
            
            if (s.id.startsWith('ps-pm-')) {
                if (s.id.includes('-4x4') && !is4x4) return false;
                if (s.id.includes('-4x2') && is4x4) return false;
                return true;
            }

            return false;
        }

        return true;
    });

    const msp = mspServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    ).map(service => ({
      ...service,
      job: { 
        description: getMspDescription(service.id, selectedVehicle.model).join(', '), 
        cost: getMspServicePrice(service.id, selectedVehicle.model) 
      }
    }));
    
    const tyre = tyreServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    ).map(service => ({
      ...service,
      job: { ...service.job, cost: getTyreServicePrice(service.id, selectedVehicle.model) }
    }));

    const ac = acServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    ).map(service => ({
      ...service,
      job: { ...service.job, cost: getAcServicePrice(service.id, selectedVehicle.model) }
    }));

    const engine = engineMaintenanceServices.filter((s) =>
      s.applicableModels.includes(selectedVehicle.model)
    ).map(service => ({
      ...service,
      job: { ...service.job, cost: getEngineServicePrice(service.id, selectedVehicle.model) }
    }));

    return { periodic, msp, tyre, ac, engine };
  }, [selectedVehicle]);
  
  useEffect(() => {
    setSelectedPeriodicService(null);
    setSelectedMspService(null);
    setSelectedTyreServices([]);
    setSelectedAcServices([]);
    setSelectedEngineServices([]);
  }, [selectedVehicle]);

  const allSelectedServices = useMemo(() => {
    const list = [
      ...selectedTyreServices,
      ...selectedAcServices,
      ...selectedEngineServices,
    ];
    if (selectedMspService) {
      list.push(selectedMspService);
    }
    return list;
  }, [selectedTyreServices, selectedAcServices, selectedEngineServices, selectedMspService]);

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
              <CardContent>
                <VehicleSelectionForm
                    vehicles={vehicles}
                    onVehicleSelect={setSelectedVehicle}
                />
              </CardContent>
            </Card>

            {selectedVehicle && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Pilih Jenis Servis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ServiceSelection
                      periodicServices={filteredServices.periodic}
                      mspServices={filteredServices.msp}
                      tyreServices={filteredServices.tyre}
                      acServices={filteredServices.ac}
                      engineServices={filteredServices.engine}
                      partsData={parts}
                      onPeriodicChange={setSelectedPeriodicService}
                      onMspChange={setSelectedMspService}
                      onTyreChange={setSelectedTyreServices}
                      onAcChange={setSelectedAcServices}
                      onEngineChange={setSelectedEngineServices}
                      selectedPeriodicService={selectedPeriodicService}
                      selectedMspService={selectedMspService}
                      selectedTyreServices={selectedTyreServices}
                      selectedAcServices={selectedAcServices}
                      selectedEngineServices={selectedEngineServices}
                      vehicleModelId={selectedVehicle.model}
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
            partsData={parts}
        />
      </div>
    </div>
  );
}