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
  Accessory,
  Part,
} from "@/lib/types";

interface Props {
  periodicServices: PeriodicService[];
  additionalServices: AdditionalService[];
  accessories: Accessory[];
  partsData: Part[];
  onPeriodicChange: (service: PeriodicService | null) => void;
  onAdditionalChange: (services: AdditionalService[]) => void;
  onAccessoryChange: (accessories: Accessory[]) => void;
  selectedPeriodicService: PeriodicService | null;
  selectedAdditionalServices: AdditionalService[];
  selectedAccessories: Accessory[];
}

export default function ServiceSelection({
  periodicServices,
  additionalServices,
  accessories,
  partsData,
  onPeriodicChange,
  onAdditionalChange,
  onAccessoryChange,
  selectedPeriodicService,
  selectedAdditionalServices,
  selectedAccessories,
}: Props) {
  const handlePeriodicChange = (serviceId: string) => {
    const service = periodicServices.find((s) => s.id === serviceId) || null;
    onPeriodicChange(service);
  };

  const handleAdditionalChange = (service: AdditionalService) => {
    const isSelected = selectedAdditionalServices.some((s) => s.id === service.id);
    if (isSelected) {
      onAdditionalChange(selectedAdditionalServices.filter((s) => s.id !== service.id));
    } else {
      onAdditionalChange([...selectedAdditionalServices, service]);
    }
  };

  const handleAccessoryChange = (accessory: Accessory) => {
    const isSelected = selectedAccessories.some((s) => s.id === accessory.id);
    if (isSelected) {
      onAccessoryChange(selectedAccessories.filter((s) => s.id !== accessory.id));
    } else {
      onAccessoryChange([...selectedAccessories, accessory]);
    }
  };

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
              <TableRow key={`job-${index}`}>
                <TableCell>{job.description}</TableCell>
                <TableCell className="text-right">{formatCurrency(job.cost)}</TableCell>
              </TableRow>
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

  const renderAccessoryDetails = (accessory: Accessory) => {
    const totalCost = accessory.price + accessory.job.cost;
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
            <TableRow>
              <TableCell>Harga Barang</TableCell>
              <TableCell className="text-right">{formatCurrency(accessory.price)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{accessory.job.description}</TableCell>
              <TableCell className="text-right">{formatCurrency(accessory.job.cost)}</TableCell>
            </TableRow>
            <TableRow className="font-bold bg-secondary">
              <TableCell>Subtotal</TableCell>
              <TableCell className="text-right">{formatCurrency(totalCost)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-medium">Paket Servis Berkala</AccordionTrigger>
        <AccordionContent>
          <RadioGroup
            value={selectedPeriodicService?.id}
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
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-medium">Aksesoris Mitsubishi</AccordionTrigger>
        <AccordionContent className="grid gap-4">
          {accessories.map((accessory) => (
             <Accordion type="single" collapsible key={accessory.id} className="rounded-md border">
                <AccordionItem value={accessory.id}>
                    <div className="flex items-center space-x-3 p-4">
                        <Checkbox
                            id={accessory.id}
                            checked={selectedAccessories.some((s) => s.id === accessory.id)}
                            onCheckedChange={() => handleAccessoryChange(accessory)}
                        />
                        <Label htmlFor={accessory.id} className="flex-1 font-normal cursor-pointer text-base">
                            {accessory.name}
                        </Label>
                        <AccordionTrigger className="py-0 px-2 [&[data-state=open]>svg]:text-primary" />
                    </div>
                    <AccordionContent className="px-4 pb-4">
                        {renderAccessoryDetails(accessory)}
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
