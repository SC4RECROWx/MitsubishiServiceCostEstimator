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
            Fitur AI Service Advisor saat ini sedang mengalami gangguan dan belum bisa memberikan rekomendasi. Silakan pilih servis secara manual dari daftar di bawah.
        </CardDescription>
      </CardHeader>
      <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Fitur Belum Tersedia</AlertTitle>
            <AlertDescription>
                AI service advisor masih error dan belum bisa memberikan rekomendasi service. Kami mohon maaf atas ketidaknyamanannya.
            </AlertDescription>
          </Alert>
      </CardContent>
    </Card>
  );
}
