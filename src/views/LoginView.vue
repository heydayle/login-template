<script setup lang="ts">
import IconDowntime  from '@/assets/svg/downtime.svg'
import IconFaster  from '@/assets/svg/faster.svg'
import IconMonitor  from '@/assets/svg/monitor.svg'
import IconIncident  from '@/assets/svg/incident.svg'
import GradientShape  from '@/assets/images/gradient-shape.png'
const Benefits = [
  {
    icon: IconDowntime,
    title: 'Spot downtime and help you debug',
    description: 'We spot downtime and help you debug, and resolve problems in the fastest time. Save efforts and lower the risk of downtime.'
  },
  {
    icon: IconFaster,
    title: 'Spot and resolve downtime faster',
    description: 'Monitor every aspect of your website from anywhere globally, immediate alerts, automatic escalation and resolve issues quickly.'
  },
  {
    icon: IconMonitor,
    title: 'Uptime monitoring',
    description: 'Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging'
  },
  {
    icon: IconIncident,
    title: 'Incident management',
    description: 'Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging'
  },
]
const Benefit_Heading = '<span class="font-bold text-4xl text-heading mb-10 whitespace-pre-line">Downtime happens? No problem!\n Get 100 monitors within 5\n minutes <span class="font-bold text-[#00FF94E5]">for free</span></span>'
</script>

<template>
  <div class="h-[100vh] grid grid-cols-2">
    <div class="h-full flex flex-col text-white bg-gradient-to-b from-[#001033] from-100% pt-32">
      <div class="flex-1 px-20">
        <h1 v-html="Benefit_Heading" />
        <div>
          <div v-for="(item, index) in Benefits" :key="index" class="flex space-x-8 py-4">
            <div class="flex items-center">
              <Component :is="item.icon" />
            </div>
            <div>
              <div class="text-xl font-bold pb-2">{{ item.title }}</div>
              <div class="text-sm">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex flex-1">
        <img class="absolute bottom-0" src="@/assets/images/gradient-shape.png" alt="content">
        <img class="mt-auto relative z-10 px-20" src="@/assets/images/content.png" alt="content">
      </div>
    </div>
    <div>Form</div>
  </div>
</template>

<style scoped>

</style>