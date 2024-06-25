type Left<L> = { kind: "left"; leftValue: L };
type Right<R> = { kind: "right"; rightValue: R };

type EitherValue<L, R> = Left<L> | Right<R>;

export class Either<L, R> {
    private constructor(private readonly value: EitherValue<L, R>) { }

    isLeft(): boolean {
        return this.value.kind === "left";
    }

    isRight(): boolean {
        return this.value.kind === "right";
    }

    getLeftValue(): L | undefined {
        switch (this.value.kind) {
            case "left":
                return this.value.leftValue;
            default:
                return;
        }
    }

    getRightValue(): R | undefined {
        switch (this.value.kind) {
            case "right":
                return this.value.rightValue;
            default:
                return;
        }
    }

    fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T {
        switch (this.value.kind) {
            case "left":
                return leftFn(this.value.leftValue);
            case "right":
                return rightFn(this.value.rightValue);
        }
    }

    static left<L, R>(value: L) {
        return new Either<L, R>({ kind: "left", leftValue: value });
    }

    static right<L, R>(value: R) {
        return new Either<L, R>({ kind: "right", rightValue: value });
    }
}