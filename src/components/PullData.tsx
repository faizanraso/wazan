import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface BodyWeightData {
  date: string;
  weight: number;
}

export default function PullData() {
  const supabase = useSupabaseClient();
  const [bodyWeightData, setBodyWeightData] = useState<BodyWeightData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("body_weight_data")
        .select("date, weight")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
        .order("date", { ascending: true });
      if (error) console.log("error", error);
      if (data) setBodyWeightData(data);
    };
    fetchData();
  }, [supabase]);

  console.log(bodyWeightData);

  return (
    <div className="flex text-center justify-center items-center mx-auto items-center">
      <h1 className="text-3xl font-bold">Pull Data</h1>
    </div>
  );
}
