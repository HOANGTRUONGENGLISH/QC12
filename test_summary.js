const fs = require('fs');
const html = fs.readFileSync('/Users/wilsonvan/Thỏ/QC12/mysecond.html', 'utf8');
const summaryMatch = html.match(/function showFinalSummary[\s\S]*?sumOverlay\.innerHTML\s*=\s*content;/);
if(summaryMatch) {
    console.log("Summary block found.");
    try {
      new Function("orb1", "orb2", "totalScore", "secondsElapsed", "step2YesNo", "originalFlashcardsCount", "reviewWordsList", "buildOrbHTML", "resetQuiz", "playSuccessSound", summaryMatch[0]);
      console.log("Syntax is fully OK");
    } catch(e) {
      console.error(e);
    }
} else {
    console.log("Not found block");
}
