 export const fakeAuth = {
    isAuthenticated: false,

    authenticate(myFunc) {
        this.isAuthenticated = true
        setTimeout(myFunc, 200)// fake async
    },

    signOut(myFunc) {
        this.isAuthenticated = false
        setTimeout(myFunc, 200)// fake async
    }
}