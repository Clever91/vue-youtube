import firebase from 'firebase/app'

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = firebase.auth().currentUser.uid;
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name: name
                }, (error) => {
                    if (error) {
                        commit('setError', error)
                        throw error
                    } else {
                      // Data saved successfully!
                    }
                });
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async logout() {
            try {
                await firebase.auth().signOut();
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}
