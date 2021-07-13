const App = {
    data() {
        return {
            dataArr: [
                {
                    "id": 1,
                    "company": "Photosnap",
                    "logo": "./assets/img/photosnap.svg",
                    "new": true,
                    "featured": true,
                    "position": "Senior Frontend Developer",
                    "role": "Frontend",
                    "level": "Senior",
                    "postedAt": "1d ago",
                    "contract": "Full Time",
                    "location": "USA Only",
                    "languages": ["HTML", "CSS", "JavaScript"],
                    "tools": []
                },
                {
                    "id": 2,
                    "company": "Manage",
                    "logo": "./assets/img/manage.svg",
                    "new": true,
                    "featured": true,
                    "position": "Fullstack Developer",
                    "role": "Fullstack",
                    "level": "Midweight",
                    "postedAt": "1d ago",
                    "contract": "Part Time",
                    "location": "Remote",
                    "languages": ["Python"],
                    "tools": ["React"]
                },
                {
                    "id": 3,
                    "company": "Account",
                    "logo": "./assets/img/account.svg",
                    "new": true,
                    "featured": false,
                    "position": "Junior Frontend Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "2d ago",
                    "contract": "Part Time",
                    "location": "USA Only",
                    "languages": ["JavaScript"],
                    "tools": ["React", "Sass"]
                },
                {
                    "id": 4,
                    "company": "MyHome",
                    "logo": "./assets/img/myhome.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Frontend Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "5d ago",
                    "contract": "Contract",
                    "location": "USA Only",
                    "languages": ["CSS", "JavaScript"],
                    "tools": []
                },
                {
                    "id": 5,
                    "company": "Loop Studios",
                    "logo": "./assets/img/loop-studios.svg",
                    "new": false,
                    "featured": false,
                    "position": "Software Engineer",
                    "role": "Fullstack",
                    "level": "Midweight",
                    "postedAt": "1w ago",
                    "contract": "Full Time",
                    "location": "Worldwide",
                    "languages": ["JavaScript"],
                    "tools": ["Ruby", "Sass"]
                },
                {
                    "id": 6,
                    "company": "FaceIt",
                    "logo": "./assets/img/faceit.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Backend Developer",
                    "role": "Backend",
                    "level": "Junior",
                    "postedAt": "2w ago",
                    "contract": "Full Time",
                    "location": "UK Only",
                    "languages": ["Ruby"],
                    "tools": ["RoR"]
                },
                {
                    "id": 7,
                    "company": "Shortly",
                    "logo": "./assets/img/shortly.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "2w ago",
                    "contract": "Full Time",
                    "location": "Worldwide",
                    "languages": ["HTML", "JavaScript"],
                    "tools": ["Sass"]
                },
                {
                    "id": 8,
                    "company": "Insure",
                    "logo": "./assets/img/insure.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Frontend Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "2w ago",
                    "contract": "Full Time",
                    "location": "USA Only",
                    "languages": ["JavaScript"],
                    "tools": ["Vue", "Sass"]
                },
                {
                    "id": 9,
                    "company": "Eyecam Co.",
                    "logo": "./assets/img/eyecam-co.svg",
                    "new": false,
                    "featured": false,
                    "position": "Full Stack Engineer",
                    "role": "Fullstack",
                    "level": "Midweight",
                    "postedAt": "3w ago",
                    "contract": "Full Time",
                    "location": "Worldwide",
                    "languages": ["JavaScript", "Python"],
                    "tools": ["Django"]
                },
                {
                    "id": 10,
                    "company": "The Air Filter Company",
                    "logo": "./assets/img/the-air-filter-company.svg",
                    "new": false,
                    "featured": false,
                    "position": "Front-end Dev",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "1mo ago",
                    "contract": "Part Time",
                    "location": "Worldwide",
                    "languages": ["JavaScript"],
                    "tools": ["React", "Sass"]
                }
            ],
            filters: []
        }
    },
    computed: {
        filteredDataArr() {
            if (this.filters.length == 0) {
                return this.dataArr
            } else {
                let matches = [...this.dataArr]
                this.filters.forEach(filtersItem => { // Example of a 'filtersItem': { key: 'role', value: 'Frontend' }
                    matches = matches.filter(listing => listing[filtersItem.key].includes(filtersItem.value))
                    // Note that the above line took me a VERY long time to get, because of the self-referential aspect: 'matches' stores a filtered version of 'matches'. This is how we're making the UI work properly when several tag buttons are clicked consecutively and the list of listings presented, therefore, has to become smaller and smaller with each additional tag button clicked.
                    // Note that 'includes()' does also work for the regular key-value pairs, e.g., "role": "Frontend", not just for the key-value pairs with array values, e.g., "languages": ["HTML", "CSS", "JavaScript"]
                })
                return matches

                /*
                // Question: Why doesn't this work?
                // Answer: "It’s not wise to manipulate an array that you are looping through. It’s like a snake eating itself. Its behavior is unpredictable, especially since its length is changing during the loop. You want the length to be constant."
                // For an example/explanation of this, refer to the Gmail thread with subject "FEM project - static job listings master (continued again, again)" and go to my message at 7-11-2021 at 9:14am.
                let matches = [...this.dataArr]
                this.filters.forEach(filtersItem => {
                    for (let i = 0; i < matches.length; i++) {
                        if (!matches[i][filtersItem.key].includes(filtersItem.value)) {
                            // remove listing
                            matches.splice(i, 1)
                        }
                    }   
                })
                return matches
                */
            }
        }
    },
    methods: {
        addTagToFilter(tag, prop) {
            if (!this.filters.includes(tag)) { // 'this' in Vue is referring to the Vue instance
                this.filters.push({ key: prop, value: tag }) // pushing, for example: { key: 'role', value: 'Frontend' }
            }
        },
        clearFilter() {
            this.filters = []
        },
        removeTagFromFilter(filtersItem) { 
            this.filters.splice(this.filters.indexOf(filtersItem), 1)
        }
    }
}

Vue.createApp(App).mount('#app')