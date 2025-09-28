'use client';

import {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Loader2, Sparkles, Wand2} from 'lucide-react';
import type {ServiceAdvisorInput, ServiceAdvisorOutput, SelectedVehicle} from '@/lib/types';

interface ServiceAdvisorProps {
  selectedVehicle: SelectedVehicle;
  onRecommendation: (serviceName: string) => void;
  getRecommendationAction: (input: ServiceAdvisorInput) => Promise<ServiceAdvisorOutput>;
}

export default function ServiceAdvisor({
  selectedVehicle,
  onRecommendation,
  getRecommendationAction,
}: ServiceAdvisorProps) {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ServiceAdvisorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendation = async () => {
    if (!description.trim()) {
      setError('Mohon masukkan keluhan atau kondisi kendaraan Anda.');
      setResult(null);
      return;
    }
    
    setIsLoading(true);
    setResult(null);
    setError(null);

    const input: ServiceAdvisorInput = {
      vehicleModel: selectedVehicle.modelName,
      vehicleYear: selectedVehicle.year,
      vehicleTrim: selectedVehicle.trim,
      userDescription: description,
    };

    try {
      const recommendation = await getRecommendationAction(input);
      setResult(recommendation);
      if (recommendation.recommendedService) {
        onRecommendation(recommendation.recommendedService);
      }
    } catch (e) {
      console.error('Failed to get recommendation:', e);
      const errorMessage = e instanceof Error ? e.message : 'Terjadi kesalahan tidak dikenal.';
      setError(`Terjadi kesalahan saat berkomunikasi dengan AI Service Advisor. Silakan coba lagi nanti. Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Service Advisor
        </CardTitle>
        <CardDescription>
          Jelaskan keluhan atau kondisi kendaraan Anda, dan biarkan AI kami merekomendasikan servis yang tepat.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Contoh: 'Rem saya berbunyi saat mengerem' atau 'AC mobil kurang dingin'"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          disabled={isLoading}
        />
        <Button onClick={handleGetRecommendation} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" /> Menganalisis...
            </>
          ) : (
            <>
              <Sparkles /> Dapatkan Rekomendasi
            </>
          )}
        </Button>
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {result && !error && (
          <Alert variant={!result.recommendedService && !isLoading ? "destructive" : "default"}>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>
              {result.recommendedService ? 'Rekomendasi Untuk Anda' : 'Info'}
            </AlertTitle>
            <AlertDescription>{result.serviceDetails}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
