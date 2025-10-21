"use client";

import { useState, useEffect } from "react";
import type { Vehicle, SelectedVehicle } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Props {
  vehicles: Vehicle[];
  onVehicleSelect: (vehicle: SelectedVehicle | null) => void;
}

export default function VehicleSelectionForm({ vehicles, onVehicleSelect }: Props) {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedTrim, setSelectedTrim] = useState<string>("");

  const [years, setYears] = useState<number[]>([]);
  const [trims, setTrims] = useState<string[]>([]);
  
  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
    setSelectedYear("");
    setSelectedTrim("");
    onVehicleSelect(null);
    const model = vehicles.find((v) => v.id === modelId);
    setYears(model ? model.years.map((y) => y.year) : []);
    setTrims([]);
  };

  const handleYearChange = (yearStr: string) => {
    const year = parseInt(yearStr, 10);
    setSelectedYear(yearStr);
    setSelectedTrim("");
    onVehicleSelect(null);
    const model = vehicles.find((v) => v.id === selectedModel);
    const yearData = model?.years.find((y) => y.year === year);
    setTrims(yearData ? yearData.trims : []);
  };
  
  const handleTrimChange = (trim: string) => {
    setSelectedTrim(trim);
    const model = vehicles.find((v) => v.id === selectedModel);
    if (model && selectedYear && trim) {
      onVehicleSelect({
        model: model.id,
        year: parseInt(selectedYear, 10),
        trim,
        modelName: model.name,
      });
    } else {
      onVehicleSelect(null);
    }
  };


  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="model-select">Model Kendaraan</Label>
        <Select onValueChange={handleModelChange} value={selectedModel}>
          <SelectTrigger id="model-select">
            <SelectValue placeholder="Pilih Model" />
          </SelectTrigger>
          <SelectContent>
            {vehicles.map((vehicle) => (
              <SelectItem key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="year-select">Tahun Produksi</Label>
        <Select
          onValueChange={handleYearChange}
          value={selectedYear}
          disabled={!selectedModel}
        >
          <SelectTrigger id="year-select">
            <SelectValue placeholder="Pilih Tahun" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={String(year)}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="trim-select">Transmisi</Label>
        <Select
          onValueChange={handleTrimChange}
          value={selectedTrim}
          disabled={!selectedYear}
        >
          <SelectTrigger id="trim-select">
            <SelectValue placeholder="Pilih Transmisi" />
          </SelectTrigger>
          <SelectContent>
            {trims.map((trim) => (
              <SelectItem key={trim} value={trim}>
                {trim}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
