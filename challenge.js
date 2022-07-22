function climbingLeaderboard(ranked, player) {
  // Write your code here
  let result = [];
  let rankedUnique = [...new Set(ranked)].sort((a, b) => b - a);

  player.forEach((score) => {
    rankedUnique.push(score);
    rankedUnique = rankedUnique.sort((a, b) => b - a);
    result.push(rankedUnique.indexOf(score) + 1);
    rankedUnique.splice(rankedUnique.indexOf(score), 1);
  });
  return result;
}
