const commentingExample = `
;;
;; Negate the sign of a number
;;

(defun negate (X)
  "Negate the value of X."  ; This is a documentation string.
  (- X))    
`

// invalid example
const invalidExample = `
  (defun afisare (i j g h)
  (print (aref x i j))
  (print (aref x g h))(
  )
`

const example1 = `
  (setf x (make-array '(3 3):initial-contents'((1 2 3)(4 5 6)(7 8 9))))
  (write x)

  (defun afisare (i j g h)
  (print (aref x i j))
  (print (aref x g h))
  )

  (afisare 0 1 0 2)


  (setq myarray (make-array '(3 2 3) 
    :initial-contents 
    '(((a b c) (1 2 3)) 
        ((d e f) (4 5 6)) 
        ((g h i) (7 8 9)) 
    ))
  ) 
  (setq array2 (make-array '(3 2) :displaced-to myarray :displaced-index-offset 5)) 
  (write myarray)
  (terpri)
  (write array2)


  (setf (get 'student 'Nume) 'Dan)
  (setf (get 'student 'Varsta) 21)
  (setf (get 'student 'An) 3)
  (setf (get 'student 'cnp) 1970506350036)

  (terpri)
  (write (symbol-plist 'student))


  (defun averagenum (n1 n2 n3)
    (/ ( + n1 n2 n3) 3)
  )
  (write(averagenum 5 10 6))
`

const longExample = `
(setf x (make-array '(3 3):initial-contents'((1 2 3)(4 5 6)(7 8 9))))
  (write x)
  (defun afisare (i j g h)
  (print (aref x i j))
  (print (aref x g h))
  )
  (afisare 0 1 0 2)
  (setq myarray (make-array '(3 2 3)
     :initial-contents
     '(((a b c) (1 2 3))
        ((d e f) (4 5 6))
        ((g h i) (7 8 9))
     ))
  )
  (setq array2 (make-array '(3 2) :displaced-to myarray :displaced-index-offset 5))
  (write myarray)
  (terpri)
  (write array2)
  (setf (get 'student 'Nume) 'Dan)
  (setf (get 'student 'Varsta) 21)
  (setf (get 'student 'An) 3)
  (setf (get 'student 'cnp) 1970506350036)
  (terpri)
  (write (symbol-plist 'student))
  (defun averagenum (n1 n2 n3)
     (/ ( + n1 n2 n3) 3)
  )
  (write(averagenum 5 10 6))
  `

module.exports = {
  longExample,
  example1,
  invalidExample,
  commentingExample
}