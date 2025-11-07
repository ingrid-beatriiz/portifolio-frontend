const genCommitMessage = async () => {
    const res = await fetch('https://whatthecommit.com/index.txt');

    const commitMessage = await res.text();
    
    return commitMessage;
}

export default genCommitMessage;