import { createClient } from '@/app/api/server';
import { cookies } from 'next/headers';
import { Project } from '../types';

export async function getProjects() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('projects')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as Project[];
}
