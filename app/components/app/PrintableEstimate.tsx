"use client";

import { useMemo } from "react";
import type { PeriodicService, AdditionalService, Accessory, Part, SelectedVehicle, SelectedItem } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

interface Props {
  vehicle: SelectedVehicle | null;
  periodicService: PeriodicService | null;
  additionalServices: AdditionalService[];
  accessories: Accessory[];
  partsData: Part[];
}

const PPN_RATE = 0.11; // 11%

// This component is a simplified, non-interactive version for printing/PDF generation.
export default function PrintableEstimate({
  vehicle,
  periodicService,
  additionalServices,
  accessories,
  partsData,
}: Props) {
  const getPartDetails = (partId: string) => {
    return partsData.find((p) => p.id === partId);
  };

  const calculateServiceCosts = (item: PeriodicService | AdditionalService): { partsCost: number; laborCost: number } => {
    const laborCost = "jobs" in item ? item.jobs.reduce((acc, j) => acc + j.cost, 0) : item.job.cost;
    const partsCost = item.parts.reduce((acc, p) => {
      const partDetail = getPartDetails(p.partId);
      return acc + (partDetail ? partDetail.price * p.quantity : 0);
    }, 0);
    return { partsCost, laborCost };
  };

  const calculateAccessoryCosts = (item: Accessory): { partsCost: number; laborCost: number } => {
    return { partsCost: item.price, laborCost: item.job.cost };
  };

  const selectedItems: SelectedItem[] = useMemo(() => {
    const items: SelectedItem[] = [];
    if (periodicService) {
      const { partsCost, laborCost } = calculateServiceCosts(periodicService);
      items.push({ name: periodicService.name, partsCost, laborCost });
    }
    additionalServices.forEach(service => {
      const { partsCost, laborCost } = calculateServiceCosts(service);
      items.push({ name: service.name, partsCost, laborCost });
    });
    accessories.forEach(accessory => {
      const { partsCost, laborCost } = calculateAccessoryCosts(accessory);
      items.push({ name: accessory.name, partsCost, laborCost });
    });
    return items;
  }, [periodicService, additionalServices, accessories, partsData]);

  const totalCosts = useMemo(() => {
    const totals = selectedItems.reduce(
      (acc, item) => {
        acc.parts += item.partsCost;
        acc.labor += item.laborCost;
        acc.subtotal += item.partsCost + item.laborCost;
        return acc;
      },
      { parts: 0, labor: 0, subtotal: 0 }
    );
    const ppn = totals.subtotal * PPN_RATE;
    const total = totals.subtotal + ppn;
    return { ...totals, ppn, total };
  }, [selectedItems]);

  return (
    <div className="p-6 bg-background text-foreground">
        <div className="space-y-1.5 mb-6">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Estimasi Biaya Servis & Aksesoris</h2>
            {vehicle && (
                <p className="text-sm text-muted-foreground">{`${vehicle.modelName} ${vehicle.year} ${vehicle.trim}`}</p>
            )}
        </div>
        <div>
             {selectedItems.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead className="text-right">Biaya</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {selectedItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className="text-right">{formatCurrency(item.partsCost + item.laborCost)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
             ) : (
                <p className="text-sm text-muted-foreground text-center py-4">Tidak ada servis yang dipilih.</p>
             )}
            <Separator className="my-4"/>
             <div className="space-y-2 text-base">
                <div className="flex justify-between">
                    <span>Total Suku Cadang & Aksesoris</span>
                    <span className="font-semibold">{formatCurrency(totalCosts.parts)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Jasa</span>
                    <span className="font-semibold">{formatCurrency(totalCosts.labor)}</span>
                </div>
                <Separator className="my-2"/>
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">{formatCurrency(totalCosts.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                    <span>PPN (11%)</span>
                    <span className="font-semibold">{formatCurrency(totalCosts.ppn)}</span>
                </div>
                <Separator className="my-2"/>
                <div className="flex justify-between font-bold text-xl">
                    <span>Total Estimasi Biaya</span>
                    <span>{formatCurrency(totalCosts.total)}</span>
                </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">*Harga bersifat estimasi dan dapat berubah sewaktu-waktu.</p>
        </div>
    </div>
  )
}
