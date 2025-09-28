'use client';

import {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Loader2, Sparkles, Wand2} from 'lucide-react';
import type {ServiceAdvisorInput, ServiceAdvisorOutput} from '@/lib/types';

interface ServiceAdvisorProps {
  availableServices: Array<{id: string; name: string}>;
  onRecommendation: (serviceIds: string[]) => void;
  getRecommendationAction: (input: ServiceAdvisorInput) => Promise<ServiceAdvisorOutput>;
}

export default function ServiceAdvisor({
  availableServices,
  onRecommendation,
  getRecommendationAction,
}: ServiceAdvisorProps) {
  const [complaint, setComplaint] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ServiceAdvisorOutput | null>(null);

  const handleGetRecommendation = async () => {
    if (!complaint.trim()) {
      setResult({
        recommendedServiceIds: [],
        reasoning: 'Mohon masukkan keluhan atau kondisi kendaraan Anda.',
      });
      return;
    }
    
    setIsLoading(true);
    setResult(null);

    const input: ServiceAdvisorInput = {
      userComplaint: complaint,
      availableServices: availableServices,
    };

    try {
      const recommendation = await getRecommendationAction(input);
      setResult(recommendation);
      if (recommendation.recommendedServiceIds.length > 0) {
        onRecommendation(recommendation.recommendedServiceIds);
      }
    } catch (error) {
      console.error('Failed to get recommendation:', error);
      setResult({
        recommendedServiceIds: [],
        reasoning: 'Gagal mendapatkan rekomendasi dari server. Silakan coba lagi.',
      });
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
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
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
        {result && (
          <Alert variant={result.recommendedServiceIds.length === 0 && !isLoading ? "destructive" : "default"}>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>
              {result.recommendedServiceIds.length > 0 ? 'Rekomendasi Untuk Anda' : 'Info'}
            </AlertTitle>
            <AlertDescription>{result.reasoning}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
