'use client'
import { useQuery } from "@tanstack/react-query"
import fetchMusics from "../single-responsibility/products"
import { Music } from "@/app/@core/domain/entities/music"

export const useFetchProducts = () => {
  return useQuery({
  queryKey: ['music'],
  queryFn: fetchMusics,
 })
}