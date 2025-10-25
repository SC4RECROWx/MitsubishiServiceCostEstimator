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

interface Props {
  periodicServices: PeriodicService[];
  additionalServices: AdditionalService[];
  tyreServices: AdditionalService[];
  acAndEngineServices: AdditionalService[];
  partsData: Part[];
  onPeriodicChange: (service: PeriodicService | null) => void;
  onAdditionalChange: (services: AdditionalService[]) => void;
  onTyreChange: (services: AdditionalService[]) => void;
  onAcChange: (services: AdditionalService[]) => void;
  selectedPeriodicService: PeriodicService | null;
  selectedAdditionalServices: AdditionalService[];
  selectedTyreServices: AdditionalService[];
  selectedAcServices: AdditionalService[];
}

export default function ServiceSelection({
  periodicServices,
  additionalServices,
  tyreServices,
  acAndEngineServices,
  partsData,
  onPeriodicChange,
  onAdditionalChange,
  onTyreChange,
  onAcChange,
  selectedPeriodicService,
  selectedAdditionalServices,
  selectedTyreServices,
  selectedAcServices,
}: Props) {
  const handlePeriodicChange = (serviceId: string) => {
    if (selectedPeriodicService?.id === serviceId) {
      onPeriodicChange(null);
    } else {
      const selected = periodicServices.find((s) => s.id === serviceId);
      onPeriodicChange(selected || null);
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

  const handleAdditionalChange = createHandleChange(selectedAdditionalServices, onAdditionalChange);
  const handleTyreChange = createHandleChange(selectedTyreServices, onTyreChange);
  const handleAcChange = createHandleChange(selectedAcServices, onAcChange);

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

  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]} className="w-full">
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
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-medium">Pekerjaan Tambahan & Suku Cadang</AccordionTrigger>
        <AccordionContent className="grid gap-4">
          {additionalServices.map((service) => (
             <Accordion type="single" collapsible key={service.id} className="rounded-md border">
                <AccordionItem value={service.id}>
                    <div className="flex items-center space-x-3 p-4">
                        <Checkbox
                            id={service.id}
                            checked={selectedAdditionalServices.some((s) => s.id === service.id)}
                            onCheckedChange={() => handleAdditionalChange(service)}
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
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-medium">Perawatan AC & Mesin</AccordionTrigger>
        <AccordionContent className="grid gap-4">
          {acAndEngineServices.map((service) => (
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
