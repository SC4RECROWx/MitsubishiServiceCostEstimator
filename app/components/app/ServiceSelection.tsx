"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import type {
  PeriodicService,
  AdditionalService,
  Part,
} from "@/lib/types";
import { Info } from "lucide-react";
import { getMspDescription } from "@/lib/data/services";

interface Props {
  periodicServices: PeriodicService[];
  mspServices: AdditionalService[];
  tyreServices: AdditionalService[];
  acServices: AdditionalService[];
  engineServices: AdditionalService[];
  partsData: Part[];
  onPeriodicChange: (service: PeriodicService | null) => void;
  onMspChange: (service: AdditionalService | null) => void;
  onTyreChange: (services: AdditionalService[]) => void;
  onAcChange: (services: AdditionalService[]) => void;
  onEngineChange: (services: AdditionalService[]) => void;
  selectedPeriodicService: PeriodicService | null;
  selectedMspService: AdditionalService | null;
  selectedTyreServices: AdditionalService[];
  selectedAcServices: AdditionalService[];
  selectedEngineServices: AdditionalService[];
  vehicleModelId: string;
}

export default function ServiceSelection({
  periodicServices,
  mspServices,
  tyreServices,
  acServices,
  engineServices,
  partsData,
  onPeriodicChange,
  onMspChange,
  onTyreChange,
  onAcChange,
  onEngineChange,
  selectedPeriodicService,
  selectedMspService,
  selectedTyreServices,
  selectedAcServices,
  selectedEngineServices,
  vehicleModelId,
}: Props) {
  const handlePeriodicChange = (serviceId: string) => {
    if (selectedPeriodicService?.id === serviceId) {
      onPeriodicChange(null);
    } else {
      const selected = periodicServices.find((s) => s.id === serviceId);
      onPeriodicChange(selected || null);
    }
  };

  const handleMspChange = (serviceId: string) => {
    if (selectedMspService?.id === serviceId) {
      onMspChange(null);
    } else {
      const selected = mspServices.find((s) => s.id === serviceId);
      onMspChange(selected || null);
    }
  };
  
  const createHandleChange = (
    selectedItems: any[],
    setSelectedItems: (items: any[]) => void
  ) => (item: any) => {
    const isSelected = selectedItems.some((s) => s.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((s) => s.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleTyreChange = createHandleChange(selectedTyreServices, onTyreChange);
  const handleAcChange = createHandleChange(selectedAcServices, onAcChange);
  const handleEngineChange = createHandleChange(selectedEngineServices, onEngineChange);

  const getPartDetails = (partId: string) => {
    return partsData.find((p) => p.id === partId);
  };

  const renderServiceDetails = (service: PeriodicService | AdditionalService) => {
    const jobs = "jobs" in service ? service.jobs : [service.job];
    const totalJobCost = jobs.reduce((acc, job) => acc + job.cost, 0);
    const totalPartCost = service.parts.reduce((acc, p) => {
      const partDetail = getPartDetails(p.partId);
      return acc + (partDetail ? partDetail.price * p.quantity : 0);
    }, 0);

    return (
      <div className="space-y-4 text-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deskripsi</TableHead>
              <TableHead className="text-right">Biaya</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              job.cost > 0 && (
                <TableRow key={`job-${index}`}>
                  <TableCell>{job.description}</TableCell>
                  <TableCell className="text-right">{formatCurrency(job.cost)}</TableCell>
                </TableRow>
              )
            ))}
            {service.parts.map((p, index) => {
              const partDetail = getPartDetails(p.partId);
              if (!partDetail) return null;
              return (
                <TableRow key={`part-${index}`}>
                  <TableCell>
                    {partDetail.name} (x{p.quantity})
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(partDetail.price * p.quantity)}
                  </TableCell>
                </TableRow>
              );
            })}
             <TableRow className="font-bold bg-secondary">
                <TableCell>Subtotal</TableCell>
                <TableCell className="text-right">{formatCurrency(totalJobCost + totalPartCost)}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  };

  const renderMspDetails = (service: AdditionalService) => {
    const includedItems = getMspDescription(service.id, vehicleModelId);
    return (
      <div className="space-y-3 p-2">
        <p className="text-sm font-semibold">Suku Cadang & Jasa Termasuk:</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {includedItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="pt-2 flex justify-between font-bold border-t">
          <span>Total Paket</span>
          <span>{formatCurrency(service.job.cost)}</span>
        </div>
      </div>
    );
  };

  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-msp", "item-4", "item-5", "item-6"]} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-medium">Paket Servis Berkala</AccordionTrigger>
        <AccordionContent>
          <RadioGroup
            value={selectedPeriodicService?.id || ""}
            onValueChange={handlePeriodicChange}
            className="grid gap-4"
          >
            {periodicServices.map((service) => (
              <Accordion type="single" collapsible key={service.id} className="rounded-md border">
                <AccordionItem value={service.id}>
                    <div className="flex items-center space-x-3 p-4">
                        <RadioGroupItem value={service.id} id={service.id} />
                        <Label htmlFor={service.id} className="flex-1 font-normal cursor-pointer text-base">
                            {service.name}
                        </Label>
                        <AccordionTrigger className="py-0 px-2 [&[data-state=open]>svg]:text-primary" />
                    </div>
                    <AccordionContent className="px-4 pb-4">
                        {renderServiceDetails(service)}
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>

      {mspServices.length > 0 && (
        <AccordionItem value="item-msp">
          <AccordionTrigger className="text-lg font-medium">Paket Smart Extended (MSP)</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg flex gap-3 items-start border">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm space-y-1">
                <p className="font-semibold">Tentang Paket MSP:</p>
                <p>Paket service hemat untuk pemeliharaan kendaraan Anda kedepannya.</p>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-1">
                  <li><strong>MSP 2XPM:</strong> 2x service (Service saat ini & 1x service gratis akan datang).</li>
                  <li><strong>MSP 4XPM:</strong> 4x service (Service saat ini & 3x service gratis akan datang).</li>
                  <li><strong>MSP 6XPM:</strong> 6x service (Service saat ini & 5x service gratis akan datang).</li>
                </ul>
              </div>
            </div>

            <RadioGroup
              value={selectedMspService?.id || ""}
              onValueChange={handleMspChange}
              className="grid gap-4"
            >
              {mspServices.map((service) => (
                <Accordion type="single" collapsible key={service.id} className="rounded-md border">
                  <AccordionItem value={service.id}>
                      <div className="flex items-center space-x-3 p-4">
                          <RadioGroupItem value={service.id} id={service.id} />
                          <Label htmlFor={service.id} className="flex-1 font-normal cursor-pointer text-base">
                              {service.name}
                          </Label>
                          <AccordionTrigger className="py-0 px-2 [&[data-state=open]>svg]:text-primary" />
                      </div>
                      <AccordionContent className="px-4 pb-4">
                          {renderMspDetails(service)}
                      </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      )}

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-medium">Perawatan AC</AccordionTrigger>
        <AccordionContent className="grid gap-4">
          {acServices.map((service) => (
             <Accordion type="single" collapsible key={service.id} className="rounded-md border">
                <AccordionItem value={service.id}>
                    <div className="flex items-center space-x-3 p-4">
                        <Checkbox
                            id={service.id}
                            checked={selectedAcServices.some((s) => s.id === service.id)}
                            onCheckedChange={() => handleAcChange(service)}
                        />
                        <Label htmlFor={service.id} className="flex-1 font-normal cursor-pointer text-base">
                            {service.name}
                        </Label>
                        <AccordionTrigger className="py-0 px-2 [&[data-state=open]>svg]:text-primary" />
                    </div>
                    <AccordionContent className="px-4 pb-4">
                        {renderServiceDetails(service)}
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-medium">Perawatan Mesin</AccordionTrigger>
        <AccordionContent className="grid gap-4">
          {engineServices.map((service) => (
             <Accordion type="single" collapsible key={service.id} className="rounded-md border">
                <AccordionItem value={service.id}>
                    <div className="flex items-center space-x-3 p-4">
                        <Checkbox
                            id={service.id}
                            checked={selectedEngineServices.some((s) => s.id === service.id)}
                            onCheckedChange={() => handleEngineChange(service)}
                        />
                        <Label htmlFor={service.id} className="flex-1 font-normal cursor-pointer text-base">
                            {service.name}
                        </Label>
                        <AccordionTrigger className="py-0 px-2 [&[data-state=open]>svg]:text-primary" />
                    </div>
                    <AccordionContent className="px-4 pb-4">
                        {renderServiceDetails(service)}
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-medium">Perawatan Roda & Ban</AccordionTrigger>
        <AccordionContent className="grid gap-4">
          {tyreServices.map((service) => (
             <Accordion type="single" collapsible key={service.id} className="rounded-md border">
                <AccordionItem value={service.id}>
                    <div className="flex items-center space-x-3 p-4">
                        <Checkbox
                            id={service.id}
                            checked={selectedTyreServices.some((s) => s.id === service.id)}
                            onCheckedChange={() => handleTyreChange(service)}
                        />
                        <Label htmlFor={service.id} className="flex-1 font-normal cursor-pointer text-base">
                            {service.name}
                        </Label>
                        <AccordionTrigger className="py-0 px-2 [&[data-state=open]>svg]:text-primary" />
                    </div>
                    <AccordionContent className="px-4 pb-4">
                        {renderServiceDetails(service)}
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}