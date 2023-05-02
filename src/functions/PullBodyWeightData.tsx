import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import convertDateFormat from "./ConvertDateFormat";

interface BodyWeightData {
  date: string;
  weight: number;
}

export default function PullBodyWeightData() {
  const supabase = useSupabaseClient();
  const [bodyWeightData, setBodyWeightData] = useState<BodyWeightData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("body_weight_data")
        .select("date, weight")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
        .order("date", { ascending: true });
      if (error) console.log("error", error);
      if (data) setBodyWeightData(data);
    };
    fetchData();
  }, [supabase]);
  bodyWeightData.forEach((val, index) => {
    val.date = convertDateFormat(val.date);
  });

  return bodyWeightData;
}
