<template>
<div className="node {{ status }}">
    <img src="{{ logoPath }}" />
    <span className="label">{{ label }}</span>
    <span className="status">
        <img src="{{ image }}" />
    </span>
</div>
</template>
<script setup lang="ts">
import { ref, inject, onMounted, computed, toRefs } from "vue";
import { Graph, Node } from '@antv/x6';

const Images = {
    logo: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
    success: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ',
    failed: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ',
    running: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*t8fURKfgSOgAAAAAAAAAAAAAARQnAQ',
}

const getGraph = inject('getGraph');
const getNode = inject('getNode');

const props = defineProps({
    node: {
        status: String,
        label: String
    }
});
const logoPath = ref(Images.logo);
// const image = computed(() => Images[props.status]);
const image = computed(() => {
    debugger
    if (status === 'success') return Images.success;
    if (status === 'failed') return Images.failed;
    if (status === 'running') return Images.running;
    return Images.running;
});

onMounted(() => {
    const node = getNode() as Node;
    node.on('change:data', ({ current }) => {
        props.node = ref({});
        props.node.status = current.status;
        props.node.label = current.label;
    });
})

</script>
