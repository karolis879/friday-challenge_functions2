function laikas(x1, y1, x2, y2) {
    const startMinutes = x1 * 60 + y1;
    const endMinutes = x2 * 60 + y2;
    
    let diffMinutes = endMinutes - startMinutes;
    
    if (diffMinutes < 0) {
        diffMinutes += 24 * 60;
    }
    
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
            return { hours, minutes };
    }
    
    //-----------------------
    
    
    function isArmstrong(num) {
        let sum = 0;
        const str = num.toString();
        const len = str.length;
        for (let i = 0; i < len; i++) {
            const digit = parseInt(str[i]);
            sum += Math.pow(digit, len);
        }
        return sum === num;
    }
    
    for (let i = 100; i <= 999; i++) {
        if (isArmstrong(i)) {
            console.log(i);
        }
    }
    //------------------------
    
    function atstumas (x1, y1, x2, y2) {
            let y = x2 - x1;
            let x = y2 - y1;
        
            return Math.sqrt(x * x + y * y);
        }
        
        console.log(atstumas(-5,0,10,10));
  
//----------------------------
  
function arLyginis(num) {
    let skaiciai = num.toString().split('').map(Number)
    let lyginiai = 0;
    let nelyginiai = 0;
    for (let i = 0; i< skaiciai.length; i++ ) {
        if(skaiciai[i] % 2 === 0) {
            lyginiai++
        } else {
            nelyginiai ++
        }
    }
    return ` ${lyginiai} skaičiai lyginiai, ${nelyginiai} nelyginiai`
}
//---------------------

function kaina(ilgis, plotis) {
    const kvadratai = (ilgis * plotis) + (ilgis * plotis) * 1.05;
    const pakuotes = Math.ceil(kvadratai / 1.5);
    return pakuotes * 23 
}

//-------------------------

function vidurkis() {
    const pazymiai = []
    for (let i = 0; i < 30; i++)
    pazymiai.push (Math.floor(Math.random() * 10) + 1);
    return `Geriausias :${Math.max(...pazymiai)}, Blogiausias ${Math.min(...pazymiai)}`
}

//--------------------------

function countCoins(num) {
    let penki = 0;
    let du = 0;
    let vienas = 0;
    while (num > 0) {
      if (num >= 5) {
        penki++;
        num -= 5;
      } else if (num >= 2) {
        du++;
        num -= 2;
      } else {
        vienas++;
        num -= 1;
      }
    }
  return `penketai ${penki} dvejetai ${du} vienetai ${vienas} viso monetu ${penki + du + vienas}`
  }
  
