"use client";

import { useMemo } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { PeriodicService, AdditionalService, Accessory, Part, SelectedVehicle, SelectedItem } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { Eye, Car, CalendarPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  vehicle: SelectedVehicle | null;
  periodicService: PeriodicService | null;
  additionalServices: AdditionalService[];
  accessories: Accessory[];
  partsData: Part[];
}

const PPN_RATE = 0.11; // 11%

export default function EstimateSummary({
  vehicle,
  periodicService,
  additionalServices,
  accessories,
  partsData,
}: Props) {
  const { toast } = useToast();

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

  const handleDownloadPdf = () => {
    if (!vehicle || selectedItems.length === 0) {
      toast({
        title: "Belum Ada Servis Dipilih",
        description: "Silakan pilih kendaraan dan minimal satu jenis servis untuk melihat estimasi PDF.",
        variant: "destructive",
      });
      return;
    }

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      let cursorY = 20;

      // Header
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text("Estimasi Biaya Servis & Aksesoris", margin, cursorY);
      cursorY += 10;

      // Vehicle Info
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.text(`${vehicle.modelName} ${vehicle.year} ${vehicle.transmisi}`, margin, cursorY);
      cursorY += 10;
      
      // Line separator
      pdf.setDrawColor(200); // light gray
      pdf.line(margin, cursorY, pageWidth - margin, cursorY);
      cursorY += 10;

      // Table Header
      pdf.setFont("helvetica", "bold");
      pdf.text("Deskripsi", margin, cursorY);
      pdf.text("Biaya", pageWidth - margin, cursorY, { align: 'right' });
      cursorY += 7;

      // Table Body
      pdf.setFont("helvetica", "normal");
      selectedItems.forEach(item => {
        pdf.text(item.name, margin, cursorY);
        pdf.text(formatCurrency(item.partsCost + item.laborCost), pageWidth - margin, cursorY, { align: 'right' });
        cursorY += 7;
        if (cursorY > 260) { // check if new page is needed
          pdf.addPage();
          cursorY = 20;
        }
      });
      
      cursorY += 5;
      pdf.line(margin, cursorY, pageWidth - margin, cursorY);
      cursorY += 10;
      
      // Totals
      const textRight = (text: string, y: number) => {
        pdf.text(text, pageWidth - margin, y, { align: 'right' });
      }

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      
      pdf.text("Subtotal", margin, cursorY);
      textRight(formatCurrency(totalCosts.subtotal), cursorY);
      cursorY += 7;

      pdf.text(`PPN (${PPN_RATE * 100}%)`, margin, cursorY);
      textRight(formatCurrency(totalCosts.ppn), cursorY);
      cursorY += 10;

      // Grand Total
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text("Total Estimasi Biaya", margin, cursorY);
      textRight(formatCurrency(totalCosts.total), cursorY);
      cursorY += 15;

      // Footer Note
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text("*Harga bersifat estimasi dan dapat berubah sewaktu-waktu.", margin, cursorY);
      
      const blob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');


    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Gagal membuat file PDF. Silakan coba lagi.",
        variant: "destructive",
      });
    }
  };
  
  if (!vehicle) {
    return (
        <Card className="no-print">
            <CardHeader>
                <CardTitle>Ringkasan Estimasi</CardTitle>
                <CardDescription>Pilih kendaraan dan servis untuk melihat estimasi biaya.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground py-10">
                    <Car className="w-16 h-16 mb-4" />
                    <p>Belum ada yang dipilih</p>
                </div>
            </CardContent>
        </Card>
    )
  }

  const waNumber = "6282348000085";
  const waMessage = encodeURIComponent(`Halo, saya ingin melakukan booking service untuk kendaraan saya:
Model: ${vehicle.modelName} ${vehicle.year} ${vehicle.transmisi}
Estimasi Biaya: ${formatCurrency(totalCosts.total)}

Services:
${selectedItems.map(item => `- ${item.name}`).join('\n')}
  `);
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;


  return (
    <Card className="no-print">
        <CardHeader>
            <CardTitle>Ringkasan Estimasi</CardTitle>
            {vehicle && (
            <CardDescription>{`${vehicle.modelName} ${vehicle.year} ${vehicle.transmisi}`}</CardDescription>
            )}
        </CardHeader>
        <CardContent className="grid gap-4">
            {selectedItems.length > 0 ? (
            <div className="flex flex-col gap-2 text-sm">
                {selectedItems.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="flex-1 pr-2 truncate">{item.name}</span>
                        <span className="font-medium">{formatCurrency(item.partsCost + item.laborCost)}</span>
                    </div>
                ))}
            </div>
            ) : (
            <p className="text-sm text-muted-foreground text-center py-4">Pilih jenis servis untuk melihat rincian.</p>
            )}

            {selectedItems.length > 0 && <Separator />}

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                  <span>Total Suku Cadang & Aksesoris</span>
                  <span className="font-medium">{formatCurrency(totalCosts.parts)}</span>
              </div>
              <div className="flex justify-between">
                  <span>Total Jasa</span>
                  <span className="font-medium">{formatCurrency(totalCosts.labor)}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">{formatCurrency(totalCosts.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>PPN (11%)</span>
                <span className="font-medium">{formatCurrency(totalCosts.ppn)}</span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
            <span>Total Estimasi Biaya</span>
            <span>{formatCurrency(totalCosts.total)}</span>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-3 items-stretch">
            <Button onClick={handleDownloadPdf} className="w-full" variant="outline">
            <Eye className="mr-2 h-4 w-4" /> Lihat Estimasi (PDF)
            </Button>
            {selectedItems.length > 0 && (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full">
                        <CalendarPlus className="mr-2 h-4 w-4" /> Booking via WhatsApp
                    </Button>
                </a>
            )}
        </CardFooter>
    </Card>
  );
}
