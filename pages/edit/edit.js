Page({

  onLoad: function (options) {
    let page = this;

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });

    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/items/${options.id}`,
      method: 'GET',
      success(res) {
        var item = res.data;

        // Update local data
        page.setData(
          item
        );

        wx.hideToast();
      }
    });
  },

  bindSubmit: function(e) {

    let name = e.detail.value.name;
    let description = e.detail.value.description;
    let availability = e.detail.value.availability;
    let price = e.detail.value.price;
    let sizing = e.detail.value.sizing;
    let id = this.data.id;

    let item = {
      name: name,
      description: description,
      availability: availability,
      price: price,
      sizing: sizing
    }

      // Update api data
    wx.request({
      // url: `http://localhost:3000/api/v1/items/${id}`,
      url: `https://rent-my-closet.herokuapp.com/api/v1/items/${id}`,
      method: 'PUT',
      data: item,
      success() {
        // set data on index page and show
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
});