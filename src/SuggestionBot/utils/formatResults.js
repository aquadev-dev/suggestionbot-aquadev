const pb = {
    le: '<:le:1143581683199791175>',
    me: '<:me:1143581681761128608>',
    re: '<:re:1143581678846087288>',
    lf: '<:lf:1143581675276734625>',
    mf: '<:mf:1143581673636773939>',
    rf: '<:rf:1143581670054838382>',
  };
   
function formatResults(upvotes = [], downvotes = []) {
    const totalVotes = upvotes.length + downvotes.length;
    const progressBarLength = 14;
    const filledSquares = Math.round((upvotes.length / totalVotes) * progressBarLength) || 0;
    const emptySquares = progressBarLength - filledSquares || 0;
   
    if (!filledSquares && !emptySquares) {
      emptySquares = progressBarLength;
    }
   
    const upPercentage = (upvotes.length / totalVotes) * 100 || 0;
    const downPercentage = (downvotes.length / totalVotes) * 100 || 0;
   
    const progressBar =
      (filledSquares ? pb.lf : pb.le) +
      (pb.mf.repeat(filledSquares) + pb.me.repeat(emptySquares)) +
      (filledSquares === progressBarLength ? pb.rf : pb.re);
   
    const results = [];
    results.push(
      `👍 ${upvotes.length} upvotes (${upPercentage.toFixed(1)}%) • 👎 ${
        downvotes.length
      } downvotes (${downPercentage.toFixed(1)}%)`
    );
    results.push(progressBar);
   
    return results.join('\n');
}
   
module.exports = formatResults;