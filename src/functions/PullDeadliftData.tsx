import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface DeadliftData {
  date: string;
  weight: number;
}

export default function PullDeadliftData() {
  const supabase = useSupabaseClient();
  const [deadliftData, setDeafliftData] = useState<DeadliftData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("pr_data")
        .select("date, weight")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
        .eq("exercise", "deadlift")
        .order("date", { ascending: true });

      if (error) console.log(error);
      if (data) setDeafliftData(data);
    };
    fetchData();
  }, [supabase]);
  return deadliftData;
}
