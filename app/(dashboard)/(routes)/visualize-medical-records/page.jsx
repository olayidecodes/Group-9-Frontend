"use client"

import * as z from 'zod'
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'
import { useEffect } from 'react'
import ApexCharts from 'react-apexcharts';
import { Chart } from "chart.js";

const ConversationPage = () => {
    const router = useRouter()


    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Idia", "Queens", "Awo", "Tedder", "Bello", "Kuti", "Mellanby"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Typhoid",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }, {
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Flu",
                    borderColor: "rgb(60,186,159)",
                    backgroundColor: "rgb(60,186,159,0.1)",
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Malaria",
                    borderColor: "rgb(255,165,0)",
                    backgroundColor: "rgb(255,165,0,0.1)",
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Cholera",
                    borderColor: "rgb(196,88,80)",
                    backgroundColor: "rgb(196,88,80,0.1)",
                }
                ]
            },
        });
    }, [])


  return (
    <div className='px-4 lg:px-8'>
      <Heading 
        title='Visualize'
        description='View your records in the most informative way'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Record (1)</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
    </div>
  )
}

export default ConversationPage
