"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getServiceRecommendation } from "@/app/actions";
import type { SelectedVehicle } from "@/lib/types";
import { Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  vehicle: SelectedVehicle;
}

interface Recommendation {
  recommendedService: string;
  serviceDetails: string;
}

export default function ServiceAdvisor({ vehicle }: Props) {
  const [userDescription, setUserDescription] = useState("");
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userDescription || !vehicle) return;

    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    const input = {
      vehicleModel: vehicle.modelName,
      vehicleYear: vehicle.year,
      vehicleTrim: vehicle.trim,
      userDescription: userDescription,
    };

    const result = await getServiceRecommendation(input);

    if (result.success && result.data) {
      setRecommendation(result.data);
    } else {
      setError(result.error || "An unknown error occurred.");
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Wand2 className="text-primary" />
            AI Service Advisor
        </CardTitle>
        <CardDescription>
          Tidak yakin servis apa yang dibutuhkan? Jelaskan keluhan atau kebutuhan Anda dan biarkan AI kami memberikan rekomendasi.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="user-description">Keluhan atau Kebutuhan Servis</Label>
            <Textarea
              id="user-description"
              placeholder="Contoh: 'Sudah waktunya ganti oli.' atau 'AC sudah tidak dingin dan mesin terasa kasar.'"
              value={userDescription}
              onChange={(e) => setUserDescription(e.target.value)}
              required
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {recommendation && (
            <Card className="bg-accent">
                <CardHeader>
                    <CardTitle className="text-lg">Rekomendasi Servis</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="font-semibold text-primary">{recommendation.recommendedService}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{recommendation.serviceDetails}</p>
                </CardContent>
            </Card>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading || !userDescription}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Dapatkan Rekomendasi
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
