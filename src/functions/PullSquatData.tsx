import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface SquatData {
  date: string;
  weight: number;
}

export default function PullSquatData() {
  const supabase = useSupabaseClient();
  const [squatData, setSquatData] = useState<SquatData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("pr_data")
        .select("date, weight")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
        .eq("exercise", "squat")
        .order("date", { ascending: true });
      if (error) console.log(error);
      if (data) setSquatData(data);
    };
    fetchData();
  }, [supabase]);
  return squatData;
}
