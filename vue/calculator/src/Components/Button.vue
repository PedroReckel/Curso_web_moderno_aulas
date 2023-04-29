<template>
    <!-- Quando o evento de onClick for chamado ele vai emitir (enviar) o label do botão para o evento -->
    <button class="button" 
        @click="$emit('onClick', label)"  
        :class="{ double, triple, operation }">  <!-- Aqui ele vai aplicar a classe que tiver o atributo como verdadeiro -->
        {{ label }}
    </button>
</template>

<script>

export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}

</script>

<style>
    :root {
        --bg-button: #f0f0f0;
        --border-button: solid 1px #888;
    }

    .button {
        font-size: 1.4em;
        background-color: var(--bg-button);
        border: none;
        border-right: var(--border-button);
        border-bottom: var(--border-button);
        outline: none;
    }

    .button:active {
        background-color: #ccc;
    }

    .button.double {
        grid-column: span 2;
    }

    .button.triple {
        grid-column: span 3;
    }

    .button.operation {
        background-color: #fa8231;
        color: #fff;
    }

    .button.operation:active {
        background-color: #fa8231cc;
    }
</style>