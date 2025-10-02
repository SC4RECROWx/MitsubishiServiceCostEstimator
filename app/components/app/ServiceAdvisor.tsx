'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader, WandSparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { getSuggestionAction } from '@/app/actions';
import type { SelectedVehicle, PeriodicService, AdditionalService, Accessory } from '@/lib/types';

interface ServiceAdvisorProps {
  vehicle: SelectedVehicle;
  services: {
    periodic: PeriodicService[];
    additional: AdditionalService[];
    tyre: AdditionalService[];
    ac: AdditionalService[];
    accessories: Accessory[];
  };
  onApplyRecommendation: (recommendation: string | null) => void;
}

export default function ServiceAdvisor({ vehicle, services, onApplyRecommendation }: ServiceAdvisorProps) {
  const [complaint, setComplaint] = useState('sudah waktunya service');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    const availableServices = [
      ...services.periodic,
      ...services.additional,
      ...services.tyre,
      ...services.ac,
      ...services.accessories,
    ].map(s => s.name);

    try {
      const result = await getSuggestionAction({
        vehicle: `${vehicle.modelName} ${vehicle.year} ${vehicle.trim}`,
        complaint: complaint,
        availableServices: availableServices,
      });
      setSuggestion(result);
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
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
      <CardContent className="grid gap-4">
        <Textarea
          placeholder="Contoh: AC tidak dingin, rem berdecit saat hujan, atau mobil terasa limbung di kecepatan tinggi."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          rows={3}
          disabled={isLoading}
        />
        <Button onClick={handleSubmit} disabled={isLoading || !complaint.trim()}>
          {isLoading ? (
            <Loader className="animate-spin" />
          ) : (
            'Dapatkan Rekomendasi'
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {suggestion && (
          <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CheckCircle className="text-green-600" />
            <AlertTitle className="text-green-800 dark:text-green-400">Rekomendasi AI</AlertTitle>
            <AlertDescription className="flex items-center justify-between gap-2 text-green-700 dark:text-green-500">
              <span>Kami merekomendasikan: <strong>{suggestion}</strong></span>
              <Button size="sm" variant="outline" className="bg-transparent border-green-600 text-green-700 hover:bg-green-100 dark:hover:bg-green-900/50" onClick={() => onApplyRecommendation(suggestion)}>
                Terapkan
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
