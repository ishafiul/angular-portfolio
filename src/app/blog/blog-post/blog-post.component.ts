import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const fixedTarget = document.querySelector('#fixed-target')
    const fixedTarget2 = document.querySelector('#fixed-target2')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target
        if (entry.isIntersecting) {
          // @ts-ignore
          fixedTarget.classList.remove('fixed')
          // @ts-ignore
          fixedTarget.classList.remove('-mt-[50rem]')

          // @ts-ignore
          fixedTarget2.classList.remove('fixed')
          // @ts-ignore
          fixedTarget2.classList.remove('-mt-[50rem]')
        } else {
          // @ts-ignore
          fixedTarget.classList.add('fixed')
          // @ts-ignore
          fixedTarget.classList.add('-mt-[50rem]')
          // @ts-ignore
          // @ts-ignore


          // @ts-ignore
          fixedTarget2.classList.add('fixed')
          // @ts-ignore
          fixedTarget2.classList.add('-mt-[50rem]')
          // @ts-ignore
        }
      })
    })

    // @ts-ignore
    observer.observe(document.querySelector('#box'))
  }

}
