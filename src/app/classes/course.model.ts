export enum EHowToLearn{
    zoom,frontal
}
export class Course{
id!: number
name!: string
categoryId!: number
countLessons!: number
syllabus: string[]=[]
learningWay!: EHowToLearn
startDate!: Date
static instructions: string[] = [];
lecturerId!: number
img!: string
 }