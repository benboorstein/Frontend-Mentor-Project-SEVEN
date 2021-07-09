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
        // Current challenge: make it work when several buttons are clicked consecutively. You somehow need to store things or something
        /* His relevant email:
        - Yes, we are not taking advantage of filter right now.
        - Yes, map offers another way to iterate through an array, though it is designed to change each value. So it is not the right solution.
        - You need a way to begin with an array identical to dataArr, and continually remove items from that new array each iteration through ‘filters’.
        - Crazily enough, the solution - I think - requires only two small changes to your current code on lines 181-185.
        */
        filteredDataArr() {
            if (this.filters.length == 0) {
                return this.dataArr
            } else {
                //////// SECOND version that doesn't work for even the first tag clicked:
                this.filters.forEach(filtersItem => {
                    this.dataArr.filter(listing => listing[filtersItem.key].includes(filtersItem.value))
                })
                // QQQ: I know that forEach() returns 'undefined', but I don't think that's the problem here, because 1) filter() returns a new array, 2) all the listings in the UI are being removed (not what I want), and 3) replacing forEach() with map() (which does return a value other than 'undefined') has the same effect.
                ////////////////////////////////////

                // //////// FIRST version that works for just the first tag clicked:
                // let matches = []
                // this.filters.forEach(filtersItem => {
                //     this.dataArr.filter(listing => { // QQQ: If don't end up actually using what 'filter()' does, use 'forEach()' instead 
                //         if (listing[filtersItem.key].includes(filtersItem.value)) { // 'includes()' does also work for the regular key-value pairs, e.g., "role": "Frontend", not just for the key-value pairs with array values, e.g., "languages": ["HTML", "CSS", "JavaScript"]
                //             matches.push(listing)
                //         }  
                //     })
                // })
                // return matches
                // ////////////////////////////////////
            }
        }
    },
    methods: {
        addTagToFilter(tag, prop) {
            console.log(tag, prop)
            if (!this.filters.includes(tag)) { // 'this' in Vue is referring to the Vue instance
                this.filters.push({ key: prop, value: tag }) // pushing, for example: key: 'role', value: 'Frontend'
            }
        },
        clearFilter() {
            this.filters = []
        }
    }
}

Vue.createApp(App).mount('#app')