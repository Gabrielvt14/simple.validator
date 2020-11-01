const chai = require('chai')

const { validateCpf } = require('./../')

const expect = chai.expect

describe('testing cpf', () => {
  it('an invalid cpf', () => {
    expect(validateCpf('341.302.151-86')).to.be.false
    expect(validateCpf('341.302.151-861')).to.be.false
    expect(validateCpf('111.111.111-11')).to.be.false
    expect(validateCpf('222.222.222-22')).to.be.false
    expect(validateCpf('333.333.333-33')).to.be.false
    expect(validateCpf('444.444.444-44')).to.be.false
    expect(validateCpf('555.555.555-55')).to.be.false
    expect(validateCpf('666.666.666-66')).to.be.false
    expect(validateCpf('777.777.777-77')).to.be.false
    expect(validateCpf('888.888.888-88')).to.be.false
    expect(validateCpf('999.999.999-99')).to.be.false
    expect(validateCpf('000.000.000-00')).to.be.false
  })

  it('a valid cpf', () => {
    // CPF generated by https://www.4devs.com.br/gerador_de_cpf
    expect(validateCpf('341.302.150-86')).to.be.true
  })
})
