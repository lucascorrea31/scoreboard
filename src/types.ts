export enum PenaltyType {
  PENALTY_MINOR = 'penalty_minor',
  PENALTY_MAJOR = 'penalty_major',
  MISCONDUCT = 'misconduct',
}

export enum OtherType {
  GOAL = 'goal',
  OTHER = 'other',
}

export type EventType = OtherType | PenaltyType

export interface TeamPlayer {
  number: number
  name: string
}

export interface TeamInterface {
  name: string
  logo: string
  score: number
  history?: {
    firstHalf: TeamGameHistory[]
    secondHalf: TeamGameHistory[]
  }
  penalties?: TeamPenalty[]
}

export interface TeamGameHistory {
  eventType: EventType
  player: TeamPlayer
  description: string
  time: number
}

export interface TeamPenalty {
  penaltyType: PenaltyType
  player: TeamPlayer
  time: number
}
