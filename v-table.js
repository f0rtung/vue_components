function createVTableComp() {
    return {
        props: {
            headers: {
                type: Array,
                required: true
            },
            rows: {
                type: Array,
                required: true
            }
        },
        template: '<table>\
                        <thead>\
                            <tr>\
                                <th v-for="header in headers">{{ header }}</th>\
                            </tr>\
                        </thead>\
                        <tbody>\
                            <tr v-for="row in rows">\
                                <th v-for="item in row">{{ item }}</th>\
                            </tr>\
                        </tbody>\
                   </table>'
    }
}