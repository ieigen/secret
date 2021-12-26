import {
  searchSigner,
  addWallet,
  getWalletList,
  addSigner,
  getSignerList,
  updateSigner,
  deleteSigner, 
  getWalletListAsSign,
} from '@/api/ncwallet'


const ncWallet = {
  state: {
    // searchList: null,
  },

  mutations: {
    
  },
  actions: {
    searchSigner({ commit }, params) {
      return new Promise((resolve, reject) => {
        searchSigner(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false, list: data })
          }
          resolve({ hasError: true, list: [], error: message });
        }).catch(error => {
          resolve({ hasError: true, list: [], error });
        })
      })
    },
    addWallet({ commit }, params) {
      return new Promise((resolve, reject) => {
        addWallet(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false })
          }
          resolve({ hasError: true, error: message });
        }).catch(error => {
          resolve({ hasError: true, error });
        })
      })
    },
    getWalletList({ commit }, params) {
      return new Promise((resolve, reject) => {
        getWalletList(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false, list: data })
          }
          resolve({ hasError: true, list: [], error: message });
        }).catch(error => {
          resolve({ hasError: true, list: [], error });
        })
      })
    },
    getWalletListAsSign({ commit }, params) {
      return new Promise((resolve, reject) => {
        getWalletListAsSign(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false, list: data })
          }
          resolve({ hasError: true, list: [], error: message });
        }).catch(error => {
          resolve({ hasError: true, list: [], error });
        })
      })
    },
    addSigner({ commit }, params) {
      return new Promise((resolve, reject) => {
        addSigner(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false })
          }
          resolve({ hasError: true, error: message });
        }).catch(error => {
          resolve({ hasError: true, error });
        })
      })
    },
    getSignerList({ commit }, params) {
      return new Promise((resolve, reject) => {
        getSignerList(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false, list: data })
          }
          resolve({ hasError: true, list: [], error: message });
        }).catch(error => {
          resolve({ hasError: true, list: [], error });
        })
      })
    },
    updateSigner({ commit }, params) {
      return new Promise((resolve, reject) => {
        updateSigner(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false })
          }
          resolve({ hasError: true, error: message });
        }).catch(error => {
          resolve({ hasError: true, error });
        })
      })
    },
    deleteSigner({ commit }, params) {
      return new Promise((resolve, reject) => {
        deleteSigner(params).then(response => {
          const { errno, data, message } = response.data
          if (errno === 0) {
            resolve({ hasError: false })
          }
          resolve({ hasError: true, error: message });
        }).catch(error => {
          resolve({ hasError: true, error });
        })
      })
    },
  }
}

export default ncWallet