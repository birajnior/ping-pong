const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")
const gapX = 10

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0, 0, this.w, this.h)
    }
}

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        canvasCtx.fillStyle = "#FFFFFF"
        canvasCtx.fillRect(
            field.w / 2 - this.w / 2, 0, this.w, this.h
        )
    }
}

const leftPaddle = {
    x: gapX,
    y: 200,
    w: line.w,
    h: 200,
    draw: function () {
        canvasCtx.fillStyle = "#FFFFFF"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 300,
    w: line.w,
    h: 200,
    draw: function () {
        canvasCtx.fillStyle = "#FFFFFF"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const score = {
    human: 3,
    computer: 2,
    draw: function () {
        canvasCtx.font = "bold 72px Arial"
        canvasCtx.textAlign = "center"
        canvasCtx.textBaseline = "top"
        canvasCtx.fillStyle = "#01341D"
        canvasCtx.fillText(this.human, field.w / 4, 50)
        canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50)
    }
}

const ball = {
    x: 300,
    y: 200,
    r: 20,
    draw: function () {
        canvasCtx.fillStyle = "#FFFFFF"
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        canvasCtx.fill()
    }
}


function setup() {
    canvasEl.width = field.w
    canvasCtx.width = field.w
    canvasEl.height = field.h
    canvasCtx.height = field.h
}

function draw() {
    // desenha o campo 
    field.draw()
    // desenha linha central
    line.draw()
    // desenha raquete esquerda
    leftPaddle.draw()
    // desenha raquete direita
    rightPaddle.draw()
    // desenha bolinha
    ball.draw()
    // desenha o placar
    score.draw()
}

setup()
draw()