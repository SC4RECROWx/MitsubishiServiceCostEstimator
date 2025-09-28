'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { WandSparkles, Check, AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '../ui/skeleton';
import type { SelectedVehicle } from '@/lib/types';

const FormSchema = z.object({
  complaint: z.string().min(10, {
    message: 'Jelaskan keluhan Anda minimal 10 karakter.',
  }),
});

interface Props {
  vehicle: SelectedVehicle;
  onRecommendation: (serviceName: string) => void;
  getSuggestionAction: (input: { vehicleModel: string; vehicleYear: number; vehicleTrim: string; userDescription: string; }) => Promise<{ recommendedService: string; serviceDetails: string; }>;
}

export default function ServiceAdvisor({ vehicle, onRecommendation, getSuggestionAction }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<{ serviceName: string; details: string } | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      complaint: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const input = {
        vehicleModel: vehicle.modelName,
        vehicleYear: vehicle.year,
        vehicleTrim: vehicle.trim,
        userDescription: data.complaint,
      };
      const result = await getSuggestionAction(input);
      setRecommendation({
        serviceName: result.recommendedService,
        details: result.serviceDetails,
      });
    } catch (e: any) {
      setError(e.message || 'Terjadi kesalahan yang tidak diketahui.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleApplyRecommendation = () => {
    if (recommendation) {
        onRecommendation(recommendation.serviceName);
        setRecommendation(null); // Clear recommendation after applying
        form.reset(); // Reset form
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <WandSparkles className="text-primary" />
          AI Service Advisor
        </CardTitle>
        <CardDescription>
          Bingung mau servis apa? Jelaskan keluhan Anda di bawah ini, dan biarkan AI kami memberikan rekomendasi.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="complaint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keluhan atau Kondisi Kendaraan</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Contoh: 'AC tidak dingin dan ada bunyi aneh dari mesin saat mobil berjalan pelan.'"
                      className="resize-none"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Menganalisis...' : 'Dapatkan Rekomendasi'}
            </Button>
          </form>
        </Form>
      </CardContent>

      {isLoading && (
        <CardFooter className="flex-col items-start gap-y-2">
           <Skeleton className="h-4 w-1/3" />
           <Skeleton className="h-4 w-full" />
           <Skeleton className="h-4 w-4/5" />
        </CardFooter>
      )}

      {error && (
        <CardFooter>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        </CardFooter>
      )}

      {recommendation && !isLoading && (
        <CardFooter className="flex-col items-start gap-4">
          <Alert variant="default" className="border-primary/50">
            <WandSparkles className="h-4 w-4" />
            <AlertTitle className="font-semibold">Rekomendasi Servis: {recommendation.serviceName}</AlertTitle>
            <AlertDescription>
              {recommendation.details}
            </AlertDescription>
          </Alert>
          <Button onClick={handleApplyRecommendation} className="w-full">
            <Check className="mr-2 h-4 w-4" /> Terapkan Rekomendasi
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
