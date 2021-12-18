import { Component, OnInit } from '@angular/core';

import { Observable, Observer, Subject, Subscriber } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('next: [obs] ', valor),
  error: error => console.warn('error: [obs] ', error),
  complete: () => console.info('Completado [obs] ')
}


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const obs$ = new Observable<string>(subs => {
    //   subs.next('hola');
    //   subs.next('mundo');

    //   // Forzar error
    //   // const a = undefined;
    //   // a.nombre = 'Fernando'

    //   subs.complete();
    //   // Despues del complete no se emite nada
    //   subs.next('mundo despues complete');
    // });

    // // obs$.subscribe(console.log);
    // // obs$.subscribe(resp => console.log(resp));

    // obs$.subscribe(
    //   valor => console.log('next: ', valor),
    //   error => console.warn('error: ', error),
    //   () => console.info('Completado')
    // );

    // obs$.subscribe(observer);



    // ***************** 02-unsubscribe-addEventListener.ts ******************************************
    // const intervalo$ = new Observable<number>(subscriber => {
    //   let contador = 0
    //   const interval = setInterval(() => {
    //     contador++;
    //     subscriber.next(contador);
    //   }, 1000);

    //   return () => {
    //     clearInterval(interval);
    //     console.log('Interval destruido');
    //   }

    // });

    // const subscription = intervalo$.subscribe(num => console.log('Num: ', num));
    // setTimeout(() => {
    //   subscription.unsubscribe()
    // }, 3000);

    // ***********************************************************


    // ***************** 03-subject.ts ******************************************

    const intervalo3$ = new Observable<number>(subscriber => {
      const intervalID = setInterval(() => {
        subscriber.next(Math.random());
      }, 1000);
      return () => {
        clearInterval(intervalID);
        console.log('Interval destruido');
      }
    });

    // const subscription3 = intervalo3$.subscribe(rnd => console.log('Num1: ', rnd));
    // const subscription4 = intervalo3$.subscribe(rnd => console.log('Num2: ', rnd));

    // Los Subjects
    //  Pueden tener multiples subcripciones
    //  Tambien es un Observer
    //  Next, error y complete.


    const subject$ = new Subject();
    intervalo3$.subscribe(subject$);

    const subscription3 = subject$.subscribe(rnd => console.log('Num1: ', rnd));
    const subscription4 = subject$.subscribe(rnd => console.log('Num2: ', rnd));

    setTimeout(() => {
      subject$.next(10);
      subject$.complete();

    }, 3000);
    // ***********************************************************



















  }
}

