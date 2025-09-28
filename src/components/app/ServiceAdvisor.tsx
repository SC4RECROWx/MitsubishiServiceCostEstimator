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
                      placeholder="Contoh: AC mobil tidak dingin, atau sudah waktunya servis rutin 20.000 KM."
                      disabled={isLoading}
                      {...field}
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
      <CardFooter className="flex-col items-start gap-4">
        {isLoading && (
            <div className="w-full space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-10 w-1/2" />
            </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {recommendation && (
          <Alert variant="default" className="bg-primary/10 border-primary/30">
             <WandSparkles className="h-4 w-4 text-primary" />
            <AlertTitle className="font-bold text-primary">Rekomendasi AI</AlertTitle>
            <AlertDescription className="space-y-3">
              <p>{recommendation.details}</p>
              <Button onClick={handleApplyRecommendation} size="sm">
                <Check className="mr-2 h-4 w-4" />
                Pilih Servis: {recommendation.serviceName}
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
