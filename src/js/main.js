const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")
const lineWidth = 15

function setup() {
    canvasEl.width = window.innerWidth
    canvasCtx.width = window.innerWidth
    canvasEl.height = window.innerHeight
    canvasCtx.height = window.innerHeight
}

function draw() {
    // desenha o campo 
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    // desenha linha central
    canvasCtx.fillStyle = "#FFFFFF"
    canvasCtx.fillRect(
        window.innerWidth / 2 - lineWidth / 2, 0, lineWidth, window.innerHeight
    )

    // desenha raquete esquerda
    canvasCtx.fillRect(
        10, 200, lineWidth, 200
    )

    // desenha raquete direita
    canvasCtx.fillRect(
        window.innerWidth - lineWidth - 10, 300, lineWidth, 200
    )

    // desenha bolinha
    canvasCtx.beginPath()
    canvasCtx.arc(550, 300, 20, 0, 2 * Math.PI, false)
    canvasCtx.fill()

    // desenha o placar
    canvasCtx.font = "bold 72px Arial"
    canvasCtx.textAlign = "center"
    canvasCtx.textBaseline = "top"
    canvasCtx.fillStyle = "#01341D"
    canvasCtx.fillText('1', window.innerWidth / 4, 50)
    canvasCtx.fillText('4', window.innerWidth / 4 + window.innerWidth / 2, 50)

}

setup()
draw()