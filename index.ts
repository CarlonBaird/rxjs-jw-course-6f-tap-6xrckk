import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

of(1, 7, 3, 6, 2)
  .pipe(
    filter((value) => value > 5), //filter first
    //the 'tap' operator can be used to debug
    // tap((value) => console.log('Spy:', value)), //take a peek at the values after filtering
    tap({
      next: (value) => console.log('Spy:', value),
      complete: () => console.log('Complete'),
    }),
    map((value) => value * 2) //lastly map
  )
  .subscribe((value) => console.log('Output:', value));
