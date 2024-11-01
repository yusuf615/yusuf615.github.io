const Container = Vue.createApp({
  data () {
    return {
      inProcess: false,
      indicatorList: [
        {
          isActive: 'activeindicator',
          id: '#Intro',
          title: 'Home',
          linkId: '0'
        },
        { isActive: false, id: '#About', title: 'About Us', linkId: '1' },
        { isActive: false, id: '#Projects', title: 'Activity', linkId: '2' },
        { isActive: false, id: '#Somedia', title: 'Aguna Satya Mulya', linkId: '3' },
        {
          isActive: false,
          id: '#ContactManager',
          title: 'Aguna Satya Mulya',
          linkId: '4'
        },
        { isActive: false, id: '#MemoryGame', title: 'Aguna Satya Mulya', linkId: '5' },
        {
          isActive: false,
          id: '#TumblrcClone',
          title: 'Aguna Satya Mulya',
          linkId: '6'
        },
        { isActive: false, id: '#Footer', title: 'Contact Us', linkId: '7' }
      ],
      backgrounds: [{ url: 'assets/background-image/background1.WEBP' }],
      postedBy: [
        {
          artistName: 'user',
          artistAvatar: 'avatar'
        }
      ],
      menuBarOpen: false,
      zero: 100,
      screenSize: 0
    }
  },

  mounted () {
    document
      .getElementById('container')
      .addEventListener('scroll', () => this.onScroll(this.$refs))
    this.handleBackgroundImage(this.backgrounds)
    this.addVisitor('My Portfolio')
  },
  beforeUnmount () {
    document
      .getElementById('container')
      .removeEventListener('scroll', () => this.onScroll(this.$refs))
    this.handleBackgroundImage(this.backgrounds)
  },

  methods: {
    onScroll (ref) {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 100
      ) {
        this.zero = document.body.scrollTop
      } else {
      }

      this.isElementInViewport(ref.login) &&
        this.activeIndicator(this.indicatorList[0])
      this.isElementInViewport(ref.About) &&
        this.activeIndicator(this.indicatorList[1])
      this.isElementInViewport(ref.projects) &&
        this.activeIndicator(this.indicatorList[2])
      this.isElementInViewport(ref.Somedia) &&
        this.activeIndicator(this.indicatorList[3])
      this.isElementInViewport(ref.contactManager) &&
        this.activeIndicator(this.indicatorList[4])
      this.isElementInViewport(ref.memoryGame) &&
        this.activeIndicator(this.indicatorList[5])
      this.isElementInViewport(ref.tumblrClone) &&
        this.activeIndicator(this.indicatorList[6])
      this.isElementInViewport(ref.footer) &&
        this.activeIndicator(this.indicatorList[7])
    },

    isElementInViewport (el) {
      var rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    },

    activeIndicator (indicator) {
      this.indicatorList.forEach(indicatorIndex => {
        if (indicatorIndex.title === indicator.title) {
          !this.inProcess && this.addVisitor(indicatorIndex.title)
          indicatorIndex.isActive = 'activeindicator'
        } else {
          indicatorIndex.isActive = false
        }
      })

      document.querySelectorAll('.menu-contents').forEach(element => {
        if (element.innerHTML === indicator.title) {
          element.classList.add('addBackground')
        } else {
          element.classList.remove('addBackground')
        }
      })

      document.getElementById(indicator.linkId).click()
      this.introDisplay(this.indicatorList)
      this.displayAboutMe(this.indicatorList)
      this.showProjects(this.indicatorList)
      this.handleSoMediaDisplay(this.indicatorList)
      this.handleContactManagerDisplay(this.indicatorList)
      this.handleMemoryGameDisplay(this.indicatorList)
      this.handleTumblrDisplay(this.indicatorList)
      this.handleMediaIconPop(this.indicatorList)
    },

    handleActiveIndicator (indicator) {
      if (!indicator.isActive) {
        return ''
      }

      return 'display:inline;opacity:1'
    },

    handleSearchInput () {
      document.getElementsByClassName('searchInput').style =
        'background-color: rgba(253, 254, 255,1);'
    },

    introDisplay (indicator) {
      let timer = 0
      if (indicator[0].isActive.length) {
        setTimeout(() => {
          document.querySelectorAll('.display-Intro-Text').forEach(element => {
            setTimeout(() => {
              element.style =
                'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1s;padding-top:0;'
            }, (timer += 200))
          })
        }, 800)
      } else {
        document.querySelectorAll('.display-Intro-Text').forEach(element => {
          element.style = 'opacity:0;padding-top:5rem;'
        })
      }
    },

    displayAboutMe (indicator) {
      if (indicator[1].isActive.length) {
        this.$refs.photoBig.style =
          'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:0% '

        setTimeout(() => {
          document.querySelectorAll('.display-text').forEach(element => {
            setTimeout(() => {
              element.style = 'opacity:1;transition: ease-in 1s;'
            }, 300)
          })
        }, 800)
      } else {
        this.$refs.photoBig.style = 'opacity:0;right:120%;padding-top:0rem;'

        document.querySelectorAll('.display-text').forEach(element => {
          element.style = 'opacity:0;padding-top:0rem;'
        })
      }
    },

    showProjects (indicator) {
      this.$refs.hoverControl.style = 'display:block'
      this.$refs.projectsContainer.style = 'display:flex'
      setTimeout(() => {
        if (indicator[2].isActive.length) {
          this.$refs.projectsContainer.style =
            'margin-top:0rem;transition:cubic-bezier(.165,.84,.44,1) 1s'
          this.$refs.img1.style =
            'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;'

          setTimeout(() => {
            this.$refs.img2.style =
              'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: 5%;top: 150%;'
          }, 300)

          setTimeout(() => {
            this.$refs.img3.style =
              'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: 10%;top:210%;'
          }, 600)
          setTimeout(() => {
            this.$refs.img4.style =
              'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: 15%;top:260%;'
          }, 800)
          setTimeout(() => {
            this.$refs.img2Mobileview.style =
              'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: auto;top: 400%;'
          }, 300)

          setTimeout(() => {
            this.$refs.img3Mobileview.style =
              'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: auto;top:700%;'
          }, 600)
          setTimeout(() => {
            this.$refs.img4Mobileview.style =
              'opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;left: auto;top:1000%;'
          }, 800)
          setTimeout(() => {
            this.$refs.projectsText.style = 'opacity:1;transition: opacity 2s'
          }, 1500)
          setTimeout(() => {
            this.$refs.hoverControl.style = 'display:none'
          }, 2000)
        } else {
          this.$refs.projectsContainer.style = 'margin-top:20rem'
          this.$refs.img1.style = 'opacity:0;bottom: 68%;right:-50%;'
          this.$refs.img2.style = 'opacity:0;left:100%'
          this.$refs.img3.style = 'opacity:0;left:100%'
          this.$refs.img4.style = 'opacity:0;left:100%'
          this.$refs.img2Mobileview.style = 'opacity:0;left:100%'
          this.$refs.img3Mobileview.style = 'opacity:0;left:100%'
          this.$refs.img4Mobileview.style = 'opacity:0;left:100%'
          this.$refs.projectsText.style = 'opacity:0'
          setTimeout(() => {
            this.$refs.projectsContainer.style = 'display:none'
          }, 100)
        }
      }, 500)
    },

    handleSoMediaDisplay (indicator) {
      if (indicator[3].isActive.length) {
        this.$refs.hoverControl.style = 'display:block'
        setTimeout(() => {
          this.$refs.hoverControl.style = 'display:none'
        }, 2000)

        this.$refs.SomediaImg.style =
          'margin-top:0;margin-left:-50rem;margin-right:50rem;opacity:1 ;transition: all ease-out 0.7s'
        setTimeout(() => {
          this.$refs.somediaText.style =
            'opacity:1 ;margin-left:0rem;margin-right:0rem;transition: all ease-out 0.7s'
          this.$refs.SomediaImg.style =
            'margin-left:0;margin-right:0rem;opacity:1 ;transition: all ease-out 0.7s'
        }, 700)

        setTimeout(() => {
          document.querySelector('#Somedia .image-box-mobile').style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/somedia2.jpg');"
        }, 500)

        setTimeout(() => {
          document.querySelectorAll('.somedia-Text-Mobile').forEach(element => {
            element.style = 'opacity:1;transition: all ease-out 1s'
          })
        }, 1200)

        setTimeout(() => {
          document.querySelector('#Somedia .image-box-mobile').style =
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/somedia2.jpg');"
        }, 2000)
      } else {
        this.$refs.SomediaImg.style =
          'margin-top:40rem; margin-left:-50rem;opacity:0;margin-right:50rem;'
        this.$refs.somediaText.style =
          'opacity:0 ;margin-left:50rem;margin-right:-50rem'

        document.querySelector('#Somedia .image-box-mobile').style =
          'opacity:0;'

        document.querySelectorAll('.somedia-Text-Mobile').forEach(element => {
          element.style = 'opacity:0'
        })
      }
    },

    handleContactManagerDisplay (indicator) {
      if (indicator[4].isActive.length) {
        this.$refs.hoverControl.style = 'display:block'
        setTimeout(() => {
          this.$refs.hoverControl.style = 'display:none'
        }, 2000)

        this.$refs.contactManagerImg.style =
          'opacity:1 ;margin-left:50rem;margin-top:0;transition: all ease-out 0.7s'

        setTimeout(() => {
          this.$refs.contactManagerText.style =
            'margin-top:0;opacity:1 ;transition: all ease-out 0.7s'
          this.$refs.contactManagerImg.style =
            'opacity:1 ;margin-left:0;transition: all ease-out 0.7s'
        }, 700)

        setTimeout(() => {
          document.querySelector('#ContactManager .image-box-mobile').style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/contactManagerPic.png');"
        }, 500)

        setTimeout(() => {
          document
            .querySelectorAll('.contactManager-Text-Mobile')
            .forEach(element => {
              element.style = 'opacity:1;transition: all ease-out 0.7s'
            })
        }, 1200)
        setTimeout(() => {
          document.querySelector('#ContactManager .image-box-mobile').style =
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/contactManagerPic.png');"
        }, 2000)
      } else {
        this.$refs.contactManagerText.style = 'margin-top:40rem;opacity:0'
        this.$refs.contactManagerImg.style =
          'opacity:0;margin-left:50rem;margin-top:50rem'
        document
          .querySelectorAll('.contactManager-Text-Mobile')
          .forEach(element => {
            element.style = 'opacity:0;transition: all ease-out 0.7s'
          })
        document.querySelector('#ContactManager .image-box-mobile').style =
          'opacity:0;'
      }
    },

    handleMemoryGameDisplay (indicator) {
      if (indicator[5].isActive.length) {
        this.$refs.hoverControl.style = 'display:block'
        setTimeout(() => {
          this.$refs.hoverControl.style = 'display:none'
        }, 2000)

        this.$refs.MemoryGameImg.style =
          'margin-top:0;margin-left:-50rem; margin-right:50rem;opacity:1 ;transition: all ease-out 0.7s'
        setTimeout(() => {
          this.$refs.MemoryGameText.style =
            'opacity:1 ;margin-top:130px;transition: all ease-out 0.7s'
          this.$refs.MemoryGameImg.style =
            'margin-left:0;opacity:1 ;margin-right:0rem;transition: all ease-out 0.7s'
        }, 700)

        setTimeout(() => {
          document.querySelector('#MemoryGame .image-box-mobile').style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/memoryGame.jpg');"
        }, 500)

        setTimeout(() => {
          document
            .querySelectorAll('.MemoryGame-Text-Mobile')
            .forEach(element => {
              element.style = 'opacity:1;transition: all ease-out 0.7s'
            })
        }, 1200)

        setTimeout(() => {
          document.querySelector('#MemoryGame .image-box-mobile').style =
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/memoryGame.jpg');"
        }, 2000)
      } else {
        this.$refs.MemoryGameImg.style =
          'margin-top:40rem; margin-left:-50rem;margin-right:50rem;opacity:0'
        this.$refs.MemoryGameText.style = 'opacity:0 ;margin-top:-50rem'
        document
          .querySelectorAll('.MemoryGame-Text-Mobile')
          .forEach(element => {
            element.style = 'opacity:0;transition: all ease-out 0.7s'
          })

        document.querySelector('#MemoryGame .image-box-mobile').style =
          'opacity:0;'
      }
    },

    handleTumblrDisplay (indicator) {
      if (indicator[6].isActive.length) {
        this.$refs.hoverControl.style = 'display:block'
        setTimeout(() => {
          this.$refs.hoverControl.style = 'display:none'
        }, 2000)

        this.$refs.tumblrcloneImg.style =
          'margin-top:0;margin-left:50rem;opacity:1 ;transition: all ease-out 0.7s'
        setTimeout(() => {
          this.$refs.tumblrcloneText.style =
            'opacity:1 ;margin-left:0rem;margin-right:0rem;transition: all ease-out 0.7s'
          this.$refs.tumblrcloneImg.style =
            'margin-left:0;opacity:1 ;transition: all ease-out 0.7s'
        }, 700)

        setTimeout(() => {
          document.querySelector('#TumblrcClone .image-box-mobile').style =
            "opacity:1;transition: all ease-out 0.7s;background-image:url('./assets/images/tumblrImg1.png');"
        }, 500)

        setTimeout(() => {
          document
            .querySelectorAll('.tumblrclone-Text-Mobile')
            .forEach(element => {
              element.style = 'opacity:1;transition: all ease-out 0.7s'
            })
        }, 1200)

        setTimeout(() => {
          document.querySelector('#TumblrcClone .image-box-mobile ').style =
            "opacity:1;transition: all ease-out 1s;background-image: linear-gradient(115deg,rgba(20, 33, 45, 0.9),rgba(20, 33, 45, 0.9)),url('./assets/images/tumblrImg1.png');"
        }, 2000)
      } else {
        this.$refs.tumblrcloneImg.style =
          'margin-left:50rem; margin-top:50rem;opacity:0'
        this.$refs.tumblrcloneText.style =
          'opacity:0 ;margin-left:-50rem;margin-right:50rem'
        document
          .querySelectorAll('.tumblrclone-Text-Mobile')
          .forEach(element => {
            element.style = 'opacity:0;transition: all ease-out 0.7s'
          })

        document.querySelector('#TumblrcClone .image-box-mobile').style =
          'opacity:0;'
      }
    },

    handleMediaIconPop (indicator) {
      let timer = 0
      if (indicator[7].isActive.length) {
        document.querySelectorAll('.iconContainer').forEach(icon => {
          setTimeout(() => {
            icon.style =
              'opacity:1;transform:scale(1,1);transition: transform 1s cubic-bezier(.165,.84,.44,1);'
          }, (timer += 150))
        })
        setTimeout(() => {
          this.$refs.footerText1.style = 'opacity:1;transition: opacity 1.5s'
          setTimeout(() => {
            this.$refs.footerText2.style = 'opacity:1;transition: opacity 1.5s'
          }, 700)
        }, 1500)
      } else {
        document.querySelectorAll('.iconContainer').forEach(icon => {
          icon.style = 'opacity:0;transform:scale(0.5,0.5)'
        })
        this.$refs.footerText1.style = 'opacity:0'
        this.$refs.footerText2.style = 'opacity:0'
      }
    },

    handleBackgroundImage (backgrounds) {
      this.introDisplay(this.indicatorList)

      let num = Math.floor(Math.random() * backgrounds.length)
      this.$refs.login.style =
        'background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(' +
        backgrounds[num].url +
        ')'

      this.$refs.footer.style =
        'background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(' +
        backgrounds[num].url +
        ')'

      setInterval(() => {
        let num = Math.floor(Math.random() * backgrounds.length)
        this.$refs.login.style =
          'background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(' +
          backgrounds[num].url +
          ')'
        this.$refs.footer.style =
          'background-image: linear-gradient( 115deg, rgba(0, 25, 53, 0.9), rgba(0, 25, 53, 0.9) ), url(' +
          backgrounds[num].url +
          ')'
      }, 10000)
    },
    handleMenuBar (params) {
      let timer = 0
      if (params === 'open') {
        this.$refs.menuContainer.style =
          ' width: min(75vw, 400px);transition: width 1s cubic-bezier(.165,.84,.44,1);padding:20px;'
        setTimeout(() => {
          document.querySelectorAll('.menu-contents').forEach(content => {
            setTimeout(() => {
              content.style =
                'margin-left:0;transition: all 0.7s cubic-bezier(.165,.84,.44,1)'
            }, (timer += 150))
          })
        }, 100)
        this.menuBarOpen = true
      } else {
        this.$refs.menuContainer.style =
          'width:0%;transition: width 0.5s cubic-bezier(.165,.84,.44,1);'
        this.menuBarOpen = false

        document.querySelectorAll('.menu-contents').forEach(content => {
          setTimeout(() => {
            content.style =
              'margin-left:150%;transition: all 1s cubic-bezier(.165,.84,.44,1)'
          }, (timer += 150))
        })
      }
    },
    // Entry Point

    addVisitor (link) {
      this.inProcess = true
      this.screenSize = String(screen.width)
      const fetchOptions = {
        method: 'POST'
      }
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data =>
          fetch(
            `https://vstreamers.herokuapp.com/visitor/add/${data.ip}/${link}/${this.screenSize}`,
            fetchOptions
          )
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                this.inProcess = false
              }
            })
        )
        .catch(err => console.log(err))
    }
  }
})

Container.mount('#container')
