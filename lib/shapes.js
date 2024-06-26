class Shape {
  constructor(textParam, shapeColorParam, textColorParam) {
    this.textParam = textParam;
    this.shapeColorParam = shapeColorParam;
    this.textColorParam = textColorParam;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColorParam}" />
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColorParam}">
         ${this.textParam}
        </text>
      </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg
          version="1.1"
          width="300"
          height="200"
          xmlns="http://www.w3.org/2000/svg"

        >
        <circle cx="150" cy="100" r="80" fill="${this.shapeColorParam}" />
    
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColorParam}">
           ${this.textParam}
          </text>
        </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg
            version="1.1"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"

          >
   
            <rect x="200" y="200" width="200" height="200" fill="${this.shapeColorParam}" />
      
            <text x="100" y="100" font-size="50" text-anchor="middle" fill="${this.textColorParam}">
             ${this.textParam}
            </text>
          </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
