<script lang="ts">
import { type ChatMessage } from '/src/db'

const trimMessage = (message = '') => {
  return message.length > 200 ? `${message.slice(0, 200)}...` : message
}

const roleToLabel = (role: ChatMessage['role']) => {
  if (role === 'human') {
    return 'You'
  }

  if (role === 'system') {
    return 'System'
  }

  return 'Assistant'
}

export default defineComponent({
  props: {
    chatMessage: {
      required: true,
      type: Object as PropType<ChatMessage>,
    },
  },
  setup(props) {
    const isHuman = computed(() => props.chatMessage.role === 'human')
    const label = computed(() => roleToLabel(props.chatMessage.role))
    const message = computed(() => trimMessage(props.chatMessage.text))

    return {
      isHuman,
      label,
      message,
    }
  },
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <small class="text-layer-muted px-2" :class="{ 'self-end': isHuman, 'self-start': !isHuman }">{{ label }}</small>
    <CoreLayer class="flex flex-col bg-layer p-2 rounded" :class="{ 'self-end': isHuman, 'self-start': !isHuman }">
      <div class="whitespace-pre-line">
        {{ message }}
      </div>
    </CoreLayer>
  </div>
</template>
