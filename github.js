class GitHub {
    constructor() {

        this.config = {
            headers: {
                Authorization: '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'
            }
        }
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        // this.client_id = '19523ae44f80d61cea94';
        // this.client_secret = 'b4d3b8b992948da83b53ba6508efbc8bb5aac596';
    }

    async getUser(user) {
        // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);
        
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
            this.config
          );

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}