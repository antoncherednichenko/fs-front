export const getFrameStyles = (css: string): string => (
    `<style>
        body {
            font-family: Inter, sans-serif;
        }
        ${css}
    </style>`
)
